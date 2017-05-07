import React, { Component } from 'react';
import { Form } from 'formsy-react';
import ReactStars from 'react-stars';


export class UserDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-3 grey-text">Имя:</label>
          <div className="col-sm-9">
            <p>{this.props.firstName}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 grey-text">Фамилия:</label>
          <div className="col-sm-9">
            <p>{this.props.lastName}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 grey-text">Пол:</label>
          <div className="col-sm-9">
            <p>{this.props.sex}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 grey-text">Дата рождения:</label>
          <div className="col-sm-9">
            <p>{this.props.birthDate}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 grey-text">Рейтинг:</label>
          <div className="col-sm-9">
            <ReactStars
              value={this.props.rating}
              edit={false}
              count="3"
              size="20"
              color1={'#cccccc'}
              color2={'#b54646'}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 grey-text">Никнейм:</label>
          <div className="col-sm-9">
            <p>{this.props.nickname}</p>
          </div>
        </div>
      </Form>
    );
  }
}

export default UserDataForm;
