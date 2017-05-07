import React, { Component } from 'react';
import { Link } from 'react-router';
import { Modal, ModalBody, ModalHeader } from 'react-modal-bootstrap';
import BannerForm from 'containers/BannerForm';
import BannerImage from './baner.jpg';
import CloudImage from './cloud.png';
import CloseIcon from './CloseIcon';
import ModalMan from './ModalMan';

export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModal() {
    this.setState({
      isOpen: true,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <div className="banner-box">
          <Link onClick={this.openModal.bind(this)}>
            <img src={BannerImage} alt="banner" />
          </Link>
          <div className="form-group mt20">
            <Link to="/" className="btn btn-danger-dark banner-link">Купить онлайн-курс!</Link>
          </div>
        </div>

        <Modal isOpen={isOpen} size="modal-lg" className="buy-modal">
          <ModalHeader>
            <CloseIcon onClick={this.closeModal.bind(this)} className="buy-modal-close-icon" />
            <p className="mazarine bch bch1">Вы живете именно так,</p>
            <p className="choko bch bch2">как умеете вести</p>
            <p className="choko bch bch3">переговоры</p>
          </ModalHeader>
          <img className="header-image" src={CloudImage} alt="header" />
          <ModalBody>
            <div className="row white-text">
              <div className="col-sm-12 col-md-6 col-md-offset-5">
                <h4 className="text-center">Станьте сильнее <br /> в самых жестких переговорах </h4>
                <p>
                  «Основная задача переговорщика —
                  уметь действовать в стрессовых ситуациях,
                  не поддаваясь давлению, уловкам, сохранять эмоциональный баланс.
                </p>
                <p>
                  Для этого недостаточно просто владеть навыками ведения конструктивных
                  переговоров — нужны еще техники, позволяющие отстоять свой интерес
                  в жестких условиях.»
                </p>
                <BannerForm />
              </div>
            </div>
          </ModalBody>
        </Modal>

      </div>
    );
  }
}

export default Banner;
