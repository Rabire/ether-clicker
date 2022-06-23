/* eslint-disable dot-notation */
import { AssetCard } from 'components/AssetCard';
import { useGame } from 'hooks/useGame';
import { useWeb3 } from 'hooks/useWeb3';
import { Section } from './styles';

export function AssetsSection() {
  const { assets } = useGame();

  const { actualWinner, myScore } = useWeb3();

  return (
    <Section>
      {assets.map((asset) => (
        <AssetCard key={asset.name} asset={asset} />
      ))}

      <div className="stats">
        <h3>Your coin balance :</h3>
        {actualWinner ? (
          <div className="row">{`${actualWinner.player} : ${myScore || '??'} Coins`}</div>
        ) : (
          <div className="row">unknown</div>
        )}
      </div>
    </Section>
  );
}
