import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import MainLayout from 'components/MainLayout';
import House from 'containers/House';

export class NewProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MainLayout>
        <House/>
      </MainLayout>
    );
  }
}

export default connect(null, null)(NewProjectPage);
