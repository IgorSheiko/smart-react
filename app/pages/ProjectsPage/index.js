import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import MainLayout from 'components/MainLayout';
import ProjectsTable from 'components/ProjectsTable';
import { getProjectsRequest } from './actions';
import { makeProjectsData } from './selectors';
import { createStructuredSelector } from 'reselect';

export class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.props.getProjectsRequest()
  }

  render() {
    return (
      <MainLayout>
          123123
      </MainLayout>
    );
  }
}


export default connect(null, {getProjectsRequest})(ProjectsPage);
