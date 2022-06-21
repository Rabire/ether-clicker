import { ReactComponent as EtherSvg } from 'assets/ether-icon.svg';
import { IntroBox } from './styles';

export function Intro() {
  return (
    <IntroBox>
      <div>
        <h1>ETHER CLICKER</h1>
        <EtherSvg />
      </div>
      <p>Earn ether by clicking</p>
      <a href="play">START NOW</a>
    </IntroBox>
  );
}
