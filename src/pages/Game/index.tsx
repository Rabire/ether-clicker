import { useGame } from 'hooks/useGame';
import { AssetsSection } from 'components/AssetsSection';
import { Page, ScoreSection, ClaimButton, CoinButton } from './styles';
import coin from '../../assets/ether-coin.png';

export function Game() {
  const { coins, setCoins, multiplier } = useGame();

  const onCoinClick = () => setCoins((prev) => prev + 1 * multiplier);

  return (
    <Page>
      <ScoreSection>
        <h1>{coins} Coins</h1>
        <ClaimButton type="button">Claim</ClaimButton>
      </ScoreSection>

      <CoinButton onClick={onCoinClick}>
        <img src={coin} alt="clickable coin" />
      </CoinButton>

      <AssetsSection />
    </Page>
  );
}
