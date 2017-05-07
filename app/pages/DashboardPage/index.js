import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import MainLayout from 'components/MainLayout';
import UserDataUpdateForm from 'containers/UserDataUpdateForm';
import PasswordUpdateForm from 'containers/PasswordUpdateForm';
import messages from './messages';

function DashboardPage() {
  return (
    <MainLayout >
      <section className="">
        <div className="gray-bg gray-menu">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">
                      <FormattedMessage tagName="i18n" {...messages.todashboard} />
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-3 dashboard-avatar-container">
            </div>
            <div className="col-xs-8 col-sm-9">
              <UserDataUpdateForm />
              <PasswordUpdateForm />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-9 col-sm-offset-3">
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default DashboardPage;
