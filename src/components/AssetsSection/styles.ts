import styled from 'styled-components';
import { Color, FontSize } from 'styles/theme';

export const Section = styled.section`
  flex-direction: column;
  display: flex;

  padding: 0;
  gap: 1rem;

  .stats {
    all: unset;
    margin-top: 1rem;
    width: 100%;

    font-size: ${FontSize.Regular};

    h3 {
      font-size: ${FontSize.Regular};
    }
  }

  .row {
    color: ${Color.UtilityDark};
    margin-left: 2rem;
  }
`;
