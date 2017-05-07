import React, { Component } from 'react';
import SearchCasesForm from 'containers/SearchCasesForm';
import ResultCasesForm from 'containers/ResultCasesForm';

export class DuelRequestStep1 extends Component {
  render() {
    return (
      <div className="col-xs-12">
        <SearchCasesForm />
        <ResultCasesForm />
      </div>
    );
  }
}


export default DuelRequestStep1;
