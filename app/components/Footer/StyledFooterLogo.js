import styled from 'styled-components';
import FooterLogo from './bottom-logo.jpg';

const StyledFooterLogo = styled.div`
  background: url(${FooterLogo}) no-repeat;
  background-size: 100%;
  width: 189px;
  height: 115px;
  margin: 30px 0;
  @media (max-width:767px) {
    width: 150px;
    height: 100px;
    margin: 20px 0;
  }
`;
export default StyledFooterLogo;
