import React, { Component } from 'react';
import { Form } from 'formsy-react';
import CheckboxControl from 'components/CheckboxControl';

export class BannerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <div className="text-center">
            <button type="submit" className="btn btn-danger btn-rounded btn-buy-course btn-big-bright-danger">
              Купить он-лайн курс
            </button>
          </div>
          <CheckboxControl
            name="hidew"
            title="Пожалуйста, не показывайте мне больше данное окно"
            id="hidew"
          />
        </Form>
      </div>
    );
  }
}

export default BannerForm;
