import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'formsy-react';
import { createStructuredSelector } from 'reselect';
import SelectControl from 'components/SelectControl';
import FormWrapper from 'containers/ForgotPasswordForm/FormWrapper';
import Draggable from 'react-draggable'; // The default
import Sortable from 'react-sortablejs';
import uniqueId from 'lodash/uniqueId';


class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cloneControlledSource: [],
    };
    this.test = this.test.bind(this);
  }

  test(){
    this.props.setNewItem(this.props.name, this.state.cloneControlledSource);
  }

  render() {
    const cloneControlledSource = this.state.cloneControlledSource.map((val, key) => (
      <li key={uniqueId()} data-id={val}>{val}</li>
    ));
    return (
      <div className="col-sm-6">
        <Sortable
          options={{
            animation: 150,
            group: {
              name: this.props.name,
              pull: true,
              put: ['all']
            }
          }}
          className="block-list"
          tag="ul"
          onChange={(items) => {
            this.setState({ cloneControlledSource: items });
            this.test();
          }}
        >
          {cloneControlledSource}
        </Sortable>
        <SelectControl
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-7"
          name={`room_type.${this.props.name}`}
          title="type"
          required
          options={this.props.categories !== undefined ? this.props.categories : []}
        />
    </div>
    );
  }
}

Room.propTypes = {
  name: React.PropTypes.string.isRequired,
  setNewItem: React.PropTypes.func,
  categories: React.PropTypes.array,
};

export default connect(null, null)(Room);
