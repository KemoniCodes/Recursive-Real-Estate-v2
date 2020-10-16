import React, { Fragment, useEffect } from 'react';
import '../../scss/dashboard.scss';
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
                <h3>Agent Dashboard</h3>
                <DashboardActions />
                <p>Welcome, {user && user.name}!</p>

                <div className="row">
                    <div>
                        <img src={profile && profile.photo} alt="" />
                        <div className="agent-info">
                            <p>{profile && profile.name}</p>
                            <p className="title">{profile && profile.jobtitle}</p>
                            <ul>
                                <li><span>|</span> {profile && profile.phone}</li>
                                <li><span>|</span> {profile && profile.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button className='danger-btn' onClick={() => deleteAccount()}>Delete My Account</button>
            </div>
        </Fragment>
    );

    const userDashboard = (
        <Fragment>
            <NavBar />
            <div className='dashboard'>
                <h3>Dashboard</h3>
                <p>Welcome, {user && user.name}!</p>

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

    return loading && profile === null ? <Spinner /> : !loading && (<Fragment>  {agent === true ? (agentDashboard) : (userDashboard)} {profile !== null ? <Fragment /> : (noProfile)}</Fragment>)

};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    agent: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
