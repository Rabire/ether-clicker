import { Page, Section, ClaimButton } from './styles';
import coin from '../../assets/ether-coin.png';

export function Game() {
  return (
    <Page>
      <Section>
        <h1>Coins: 999</h1>
        <ClaimButton type="button">Claim</ClaimButton>
      </Section>

      <button type="button">
        <img src={coin} alt="clickable coin" />
      </button>

      <Section>ok</Section>
    </Page>
  );
}
