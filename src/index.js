import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import AppBase from './App';
import configureStore from './Store';
import initializeRouter from './initializeRouter';
import * as serviceWorker from './serviceWorker';

const routes = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'whatwedo', path: '/whatwedo' },
  { name: 'team', path: '/team' },
  { name: 'careers', path: '/careers' },
  { name: 'contact', path: '/contact' },
];

const moduleMappings = {
  home: { component: Home, label: 'Home', path: routes[0].path },
  about: { component: About, label: 'About', path: routes[1].path },
  whatwedo: { component: WhatWeDo, label: 'What We Do', path: routes[2].path },
  team: { component: Team, label: 'Team', path: routes[3].path },
  careers: { component: Careers, label: 'Careers', path: routes[4].path },
  contact: { component: Contact, label: 'Contact', path: routes[5].path },
};

const router = initializeRouter({
  routes,
  defaultRoute: 'home',
});
const store = configureStore(router);
const App = (
  <Provider store={store}>
    <RouterProvider router={router}>
      <AppBase
        moduleMappings={moduleMappings}
        routerActions={router}
        routes={routes}
      />
    </RouterProvider>
  </Provider>
);
router.start(() => {
  ReactDOM.render(App, document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
