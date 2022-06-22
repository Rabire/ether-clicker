import { useGame } from 'hooks/useGame';
import { useWeb3 } from 'hooks/useWeb3';
import { AssetsSection } from 'components/AssetsSection';
import { Page, ScoreSection, ClaimButton, CoinButton } from './styles';
import coin from '../../assets/ether-coin.png';

export function Game() {
  const { coins, setCoins, multiplier } = useGame();
  const { connectToAccount } = useWeb3();

  const onCoinClick = () => setCoins((prev) => prev + 1 * multiplier);

  const claimCoins = () => {
    connectToAccount();
  };

  return (
    <Page>
      <ScoreSection>
        <h1>{coins} Coins</h1>
        <ClaimButton onClick={claimCoins}>Claim</ClaimButton>
      </ScoreSection>

      <CoinButton onClick={onCoinClick}>
        <img src={coin} alt="clickable coin" />
      </CoinButton>

      <AssetsSection />
    </Page>
  );
}
