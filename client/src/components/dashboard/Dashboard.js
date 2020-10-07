import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../layout/Navbar';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile, loading, agent, photo }
}) => {
    useEffect(
        () => {
            getCurrentProfile();
        }, []
    );


    const agentDashboard = (
        <Fragment>
            <NavBar />
            <div className='dashboard'>
                <DashboardActions />
                DIS A AGENT DASHBOARD
                <p>Welcome {user && user.name}</p>

                <button className='danger-btn' onClick={() => deleteAccount()}>Delete My Account</button>
            </div>
        </Fragment>
    );

    const userDashboard = (
        <Fragment>
            <NavBar />
            <div className='dashboard'>
                DIS A USER DASHBOARD
                 <p>Welcome {user && user.name}</p>

                <button className='danger-btn' onClick={() => deleteAccount()}>Delete My Account</button>
            </div>
        </Fragment>
    );

    const noProfile = (
        <Fragment>
            <div className="dashboard">
                <p>Profile has not been set up, please add your info. </p>
                <Link to='/create-profile'>
                    <button className='btn'>Create Profile</button>
                </Link>
            </div>
        </Fragment>

    );

    return loading && profile === null ? <Spinner /> : !loading && (<Fragment>  {agent === true ? (agentDashboard) : (userDashboard)} {profile !== null ? <Fragment>has</Fragment> : (noProfile)}</Fragment>)

};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    agent: PropTypes.bool.isRequired,
    photo: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    photo: state.photo
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
