import styled from 'styled-components';
import Man from './popup-man.png';

const ModalMan = styled.div`
  @media (min-width: 992px) {
    position: absolute;
    width: 414px;
    height: 520px;
    background-image: url(${Man});
    background-position: 0 0;
    background-repeat: no-repeat;
    bottom: -1px;
    margin-left: -50px;
  }
`;

export default ModalMan;
