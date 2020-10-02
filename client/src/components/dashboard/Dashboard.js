import React, { Fragment } from 'react';
import NavBar from '../layout/Navbar';
import PropTypes from 'prop-types';

const Dashboard = props => {
    return (
        <Fragment>
            <NavBar />
            <div>
                Dashboard
            </div>
        </Fragment>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
