// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

const authToken = () => localStorage.getItem('auth_token');

const grantedAuth = (nextState, replace) => {
  if (authToken()) {
    replace({
      pathname: '/',
    });
  }
};

const requireAuth = (nextState, replace) => {
  if (!authToken()) {
    replace({
      pathname: '/sign_in',
    });
  }
};

export default function createRoutes(store) {
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  const onDashboardEnter = (nextState, replace) => {
    const user = store.getState().getIn(['global', 'currentUser']);
    if (!authToken()) {
      replace({
        pathname: '/sign_in',
      });
      return;
    }
    else if (!user) {
      localStorage.removeItem('auth_token');
    }
    else if (user.roles.includes('trainer')) {
      nextState.routes[0].childRoutes = [];
      nextState.routes[0].childRoutes.push(...trainerRoutes);
    }
    else {
      nextState.routes[0].childRoutes = [];
      nextState.routes[0].childRoutes.push(...traineeRoutes);
    }
    replace({
      pathname: '/',
    });
  };

  const traineeRoutes = [
    {
      path: '/',
      name: 'dashboard',
      onEnter: requireAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/DashboardPage/reducer'),
          import('pages/DashboardPage/sagas'),
          import('pages/DashboardPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashboard', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/sign_in',
      name: 'login',
      onEnter: grantedAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/SignInPage/reducer'),
          import('pages/SignInPage/sagas'),
          import('pages/SignInPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      onEnter: grantedAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/SignUpPage/reducer'),
          import('pages/SignUpPage/sagas'),
          import('pages/SignUpPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signUp', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/users/:id',
      name: 'users/:id',
      onEnter: requireAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/UserPage/reducer'),
          import('pages/UserPage/sagas'),
          import('pages/UserPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('userInformation', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/project_new',
      name: 'project_new',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/NewProjectPage/reducer'),
          import('pages/NewProjectPage/sagas'),
          import('pages/NewProjectPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('newProject', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/projects',
      name: 'projects',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/ProjectsPage/reducer'),
          import('pages/ProjectsPage/sagas'),
          import('pages/ProjectsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('projects', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];

  const trainerRoutes = [
    {
      path: '/',
      name: 'dashboard',
      onEnter: requireAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/DashboardPage/reducer'),
          import('pages/DashboardPage/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashboard', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/sign_in',
      name: 'login',
      onEnter: grantedAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/SignInPage/reducer'),
          import('pages/SignInPage/sagas'),
          import('pages/SignInPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];

  const baseRoutes = [
    {
      path: '/',
      name: 'dashboard',
      onEnter: onDashboardEnter,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/DashboardPage/reducer'),
          import('pages/DashboardPage/sagas'),
          import('pages/DashboardPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashboard', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/sign_in',
      name: 'login',
      onEnter: grantedAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/SignInPage/reducer'),
          import('pages/SignInPage/sagas'),
          import('pages/SignInPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      onEnter: grantedAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/SignUpPage/reducer'),
          import('pages/SignUpPage/sagas'),
          import('pages/SignUpPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signUp', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/forgot_password',
      name: 'forgot_password',
      onEnter: grantedAuth,
      getComponent(nextState, cb) {
        import('pages/ForgotPasswordPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/project_new',
      name: 'project_new',
      onEnter: onDashboardEnter,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/NewProjectPage/reducer'),
          import('pages/NewProjectPage/sagas'),
          import('pages/NewProjectPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('newProject', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];


  if (!store.getState().getIn(['global', 'currentUser'])) {
    return baseRoutes;
  }
  // create reusable async injectors using getAsyncInjectors factory
  if (store.getState().getIn(['global', 'currentUser']) && store.getState().getIn(['global', 'currentUser']).roles.includes('trainer')) {
    return trainerRoutes;
  }
  return traineeRoutes;
}
