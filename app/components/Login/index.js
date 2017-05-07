import React from 'react';

function Login(props) {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-4 col-md-6 col-md-offset-6 start-form">
            { props.children }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
