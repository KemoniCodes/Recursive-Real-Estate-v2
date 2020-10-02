import React, { Fragment, useEffect } from 'react';
import NavBar from '../layout/Navbar';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading, agent }
}) => {
    useEffect(
        () => {
            getCurrentProfile();
        }, []
    );

    console.log(agent)

    const agentDashboard = (
        <Fragment>
            <NavBar />
            <div>
                DIS A AGENT DASHBOARD
                <p>Welcome {user && user.name}</p>
            </div>
        </Fragment>
    );

    const userDashboard = (
        <Fragment>
            <NavBar />
            <div>
                DIS A USER DASHBOARD
                 <p>Welcome {user && user.name}</p>
            </div>
        </Fragment>
    );



    return loading && profile === null ? <Spinner /> : !loading && (<Fragment>  {agent === true ? (agentDashboard) : userDashboard},</Fragment>)

};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    agent: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
