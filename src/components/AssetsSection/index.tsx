/* eslint-disable dot-notation */
import { AssetCard } from 'components/AssetCard';
import { useGame } from 'hooks/useGame';
import { Section } from './styles';

export function AssetsSection() {
  const { assets } = useGame();

  return (
    <Section>
      {assets.map((asset) => (
        <AssetCard key={asset.name} asset={asset} />
      ))}
    </Section>
  );
}
