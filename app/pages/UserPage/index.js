import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MainLayout from 'components/MainLayout';
import UserDataForm from 'containers/UserDataForm';
import { hasAvatar } from 'utils/helpers/avatarHelper';
import { getUserInformationRequest } from './actions';
import { makeSelectUserData } from './selectors';

export class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getUserInformationRequest(this.props.params.id);
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <MainLayout>
        <div className="gray-bg gray-menu">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <ol className="breadcrumb">
                  <li><span>Страница пользователя</span></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-5 col-sm-3">
              <form>
                <div className="avatar-preview">
                  <img className="avatar" src={hasAvatar(this.props.user.avatar_url)} alt="Avatar" />
                </div>
                <div className="mt20">
                  <p className="text-center">
                    Рейтинг:
                    <i className="rate rate-yellow"></i>
                  </p>
                </div>
              </form>
            </div>
            <div className="col-xs-7 col-sm-9">
              <UserDataForm
                key={this.props.user.id}
                firstName={this.props.user.first_name}
                lastName={this.props.user.last_name}
                sex={this.props.user.sex}
                birthDate={this.props.user.birth_date}
                country={this.props.user.country}
                rating={this.props.user.rating}
                nickname={this.props.user.nickname}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUserData(),
});


export default connect(mapStateToProps, { getUserInformationRequest })(UserPage);
