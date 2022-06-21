import { useGame } from 'hooks/useGame';
import { Page, Section, ClaimButton } from './styles';
import coin from '../../assets/ether-coin.png';

export function Game() {
  const { coins, setCoins, multiplier } = useGame();

  const onCoinClick = () => setCoins((prev) => prev + 1 * multiplier);

  return (
    <Page>
      <Section>
        <h1>{coins} Coins</h1>
        <ClaimButton type="button">Claim</ClaimButton>
      </Section>

      <button type="button" onClick={onCoinClick}>
        <img src={coin} alt="clickable coin" />
      </button>

      <Section>ok</Section>
    </Page>
  );
}
