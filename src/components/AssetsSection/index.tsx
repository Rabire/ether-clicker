/* eslint-disable dot-notation */
import { AssetCard } from 'components/AssetCard';
import { useGame } from 'hooks/useGame';
import { useWeb3 } from 'hooks/useWeb3';
import { Section } from './styles';

export function AssetsSection() {
  const { assets } = useGame();

  const { bestPlayer, bestScore } = useWeb3();

  return (
    <Section>
      {assets.map((asset) => (
        <AssetCard key={asset.name} asset={asset} />
      ))}

      <div className="stats">
        <h3>Your coin balance :</h3>
        <div className="row">{`${bestPlayer && bestPlayer.slice(0, 17)}... : ${
          bestScore && parseInt(bestScore['_hex'], 16)
        } Coins`}</div>
      </div>
    </Section>
  );
}
