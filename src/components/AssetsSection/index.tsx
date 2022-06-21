import { AssetCard } from 'components/AssetCard';
import { assets } from './content';
import { Section } from './styles';

export function AssetsSection() {
  return (
    <Section>
      {assets.map((asset) => (
        <AssetCard asset={asset} />
      ))}
    </Section>
  );
}
