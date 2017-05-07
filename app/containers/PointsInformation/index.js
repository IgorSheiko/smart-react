import React, { Component } from 'react';

export class PointsInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="sign-form">
        <h4>Баллы</h4>
        <div className="form-group mt20">
          <div className="form-group">
            <div className="row">
              <div className="col-xs-7">
                <span className="grey-text points-left">За договоренности:</span>
              </div>
              <div className="col-xs-3">
                <span className="red-points ">+ 10</span>
              </div>
              <div className="col-xs-2 pl0">
                <div className="text-center rounded-info" data-toggle="tooltip" data-placement="bottom" title="Причина: Бабушкино Лукошко. Страна производства: Россия">
                  <i className="fa fa-info" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-xs-7">
                <span className="grey-text points-left">За отношения:</span>
              </div>
              <div className="col-xs-3">
                <span className="red-points ">+ 20</span>
              </div>
              <div className="col-xs-2 pl0">
                <div className="text-center rounded-info" data-toggle="tooltip" data-placement="bottom" title="Причина: Бабушкино Лукошко. Страна производства: Россия">
                  <i className="fa fa-info" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-xs-7">
                <span className="grey-text points-left">Штрафные баллы:</span>
              </div>
              <div className="col-xs-3">
                <span className="red-points ">- 45</span>
              </div>
              <div className="col-xs-2 pl0">
                <div className="text-center rounded-info" data-toggle="tooltip" data-placement="bottom" title="Причина: Бабушкино Лукошко. Страна производства: Россия">
                  <i className="fa fa-info" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="form-group">
            <div className="row">
              <div className="col-xs-7">
                <span className="points-left text-md">Всего:</span>
              </div>
              <div className="col-xs-3">
                <span className="red-points ">- 15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PointsInformation;
