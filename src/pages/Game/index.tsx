/* eslint-disable dot-notation */
/* eslint-disable react/no-array-index-key */
import { useGame } from 'hooks/useGame';
import { useWeb3 } from 'hooks/useWeb3';
import { AssetsSection } from 'components/AssetsSection';
import { Page, ScoreSection, ClaimButton, CoinButton } from './styles';
import coin from '../../assets/ether-coin.png';

export function Game() {
  const { coins, setCoins, multiplier } = useGame();
  const { bestPlayer, bestScore, history, isMetamaskInstalled, sendCoins } = useWeb3();

  const onCoinClick = () => setCoins((prev) => prev + 1 * multiplier);

  return (
    <Page>
      <ScoreSection>
        <h1>{coins} Coins</h1>

        <div>
          <h3>History :</h3>
          {history &&
            history
              .slice(-10)
              .map((row: [string, { _hex: string }], index: number) => (
                <div key={index} className="row">{`${row[0].slice(0, 17)}...  +${
                  row[1]
                } Coins`}</div>
              ))}
        </div>

        <div>
          <h3>Best Player :</h3>
          <div className="row">{`${bestPlayer && bestPlayer.slice(0, 17)}... : ${
            bestScore && parseInt(bestScore['_hex'], 16)
          } Coins`}</div>
        </div>

        <ClaimButton onClick={sendCoins} disabled={!isMetamaskInstalled}>
          Claim
        </ClaimButton>
        {!isMetamaskInstalled && <p>Meta mask is not installed</p>}
      </ScoreSection>

      <CoinButton onClick={onCoinClick}>
        <img src={coin} alt="clickable coin" />
      </CoinButton>

      <AssetsSection />
    </Page>
  );
}
