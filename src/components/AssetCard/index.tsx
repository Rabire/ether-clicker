import { Asset } from 'utils/dto';
import { Card } from './styles';

type Props = {
  asset: Asset;
};

export function AssetCard({ asset }: Props) {
  return (
    <Card>
      <img src={asset.image} alt="" />

      <div>
        <h2>{asset.name}</h2>
        <p>{asset.description}</p>
      </div>

      <button type="button">BUY</button>
    </Card>
  );
}
