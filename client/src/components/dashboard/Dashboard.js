import React, { Fragment, useEffect } from 'react';
import NavBar from '../layout/Navbar';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ getCurrentProfile, auth, profile: { profile, loading, agent } }) => {
    useEffect(
        () => {
            getCurrentProfile();
        }, []
    );

    // const isAgent = profile
    console.log(agent)

    const agentDashboard = (
        <Fragment>
            <NavBar />
            <div>
                DIS A AGENT DASHBOARD HOE
            </div>
        </Fragment>
    );

    const userDashboard = (
        <Fragment>
            <NavBar />
            <div>
                DIS A USER DASHBOARD HOE
            </div>
        </Fragment>
    );



    return (
        <div>
            {/* { loading && profile === null ? (<Spinner /> )? !loading && (<Fragment>  {agent === true ? (agentDashboard) : userDashboard},</Fragment>) } */}

            {loading && profile === null ? (<Spinner />)}
        </div>
    )


    //loading && profile === null ? <Spinner /> : <Fragment>
    //     <NavBar />
    //    <div>
    // Dashboard
    // </div >

    // </Fragment>
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
    agent: state.agent,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
