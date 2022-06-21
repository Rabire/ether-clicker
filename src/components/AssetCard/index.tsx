import { useGame } from 'hooks/useGame';
import { Asset } from 'utils/dto';
import { Card } from './styles';

type Props = {
  asset: Asset;
};

export function AssetCard({ asset }: Props) {
  const { setCoins } = useGame();

  const onBuy = () => {
    setCoins((prev) => prev - asset.price);
    asset.onBuy();
  };

  return (
    <Card>
      <div>
        <h2>{asset.name}</h2>
        <p>{asset.description}</p>
      </div>

      <button type="button" onClick={onBuy}>
        {asset.price}
      </button>
    </Card>
  );
}
