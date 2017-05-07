import React, { Component } from 'react';

import { Form } from 'formsy-react';
import SelectControl from 'components/SelectControl';
import TextareaControl from 'components/TextareaControl';

export class AskQuestionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  onSubmit(data) {
    console.log(data);
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <div className="form-horizontal sign-form">
          <SelectControl
            className="form-group"
            labelClassName="col-sm-3 control-label"
            divClassName="col-sm-7"
            name="question_theme"
            title="Тема вопроса"
            options={[
              { value: 'opponents', label: 'Выбор оппонента' },
              { value: 'duels', label: 'Поиск поединка' },
            ]}
          />
          <TextareaControl
            className="form-group"
            labelClassName="col-sm-3 control-label"
            divClassName="col-sm-7"
            textareaClassName="form-control ask-textarea"
            name="message"
            title="Сообщение"
            value=""
            placeholderText="Введите сообщение"
          />
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-7">
              <button type="submit" className="btn btn-danger-dark" disabled={!this.state.canSubmit}>
                Отправить
              </button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default AskQuestionForm;
