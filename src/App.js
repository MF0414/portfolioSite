import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Switch from './Switch';
import logo from './white_logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



  render() {
    const { moduleMappings } = this.props;
    const displayedRoutes = _.cloneDeep(moduleMappings);
    delete displayedRoutes.home;

    return (
      <div>
        <Navbar className="propNav" light expand="md" fixed="top">
          <NavbarBrand href="/">
            <div>
              <img style={{ height: "50px" }} src={logo} />
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {Object.keys(displayedRoutes).map(key => (
                <NavItem >
                  <NavLink style={{ color: "white" }} href={displayedRoutes[key].path}>{displayedRoutes[key].label}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
        <div className="pageContainer">
          <Switch moduleMappings={moduleMappings} />
        </div>
      </div>

    );
  }
}

App.propTypes = {
  moduleMappings: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  router: state.router,
});

export default connect(mapStateToProps)(App);
