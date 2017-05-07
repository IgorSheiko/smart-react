import styled from 'styled-components';

const StyledImg = styled.img`
  position: absolute;
  top: 200px;
  z-index: 4;
  right: 50%;
  margin-right: -255px;
  @media (max-width:991px) {
    width: 75%;
    margin-right: -15%;
  }
`;
export default StyledImg;
