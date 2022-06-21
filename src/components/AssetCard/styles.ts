import styled from 'styled-components';
import { Color, FontSize } from 'styles/theme';

type CardProps = {
  isMutted: boolean;
};

export const Card = styled.div<CardProps>`
  background: ${Color.Background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  opacity: ${(props) => (props.isMutted ? '0.2' : '1')};
  pointer-events: ${(props) => (props.isMutted ? 'none' : 'auto')};

  div {
    /* background: greenyellow; */
    width: 100%;
    margin: 0 1rem;
  }

  h2 {
  }

  p {
    color: ${Color.UtilityDark};
    font-size: ${FontSize.Small};
  }

  button {
    background: ${Color.Primary};
    padding: 1rem;

    :hover {
      background: ${Color.PrimaryLighter};
    }
  }
`;
