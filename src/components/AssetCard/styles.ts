import styled from 'styled-components';
import { Color, FontSize } from 'styles/theme';

export const Card = styled.div`
  background: ${Color.Background};
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

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
