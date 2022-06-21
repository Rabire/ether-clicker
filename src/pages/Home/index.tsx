import { ReactComponent as EtherSvg } from 'assets/ether-icon.svg';
import { Page } from './styles';

export function Home() {
  return (
    <Page>
      <div>
        <h1>ETHER CLICKER</h1>
        <EtherSvg />
      </div>
      <p>Earn ether by clicking</p>
      <a href="play">START NOW</a>
    </Page>
  );
}
