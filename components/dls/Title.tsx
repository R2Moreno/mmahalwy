import styled, { css } from 'styled-components';

const commonStyles = css`
  letter-spacing: 1px;
`;

export const Title1 = styled.h1`
  ${commonStyles}
`;
export const Title2 = styled.h2`
  ${commonStyles}
`;
export const Title3 = styled.h3`
  ${commonStyles}
`;
export const Title4 = styled.h4`
  ${commonStyles}
`;

const Title = Title2;

export default Title;
