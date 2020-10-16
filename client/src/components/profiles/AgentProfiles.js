import React, { Fragment, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getAgentProfiles } from '../../actions/profile';

const AgentProfiles = ({ getAgentProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getAgentProfiles();
    }, []);

    return (
        <Fragment>
            {loading ? <Spinner /> : <Fragment>
                <div>
                    <h1><Link to='/'>Recursive Real Estate</Link></h1>
                    <h3>International Luxury Realty</h3>
                </div>
                <Navbar />

                <h2>Our Agents</h2>
                <h2>Browse and connect with agents</h2>
                <div>
                    {profiles.length > 0 ? (
                        profiles.map(profile => (
                            <ProfileItem key={profile._id} profile={profile} />
                        ))
                    ) : <h2>No agents found</h2>}
                </div>
            </Fragment>}

        </Fragment>
    )
}

AgentProfiles.propTypes = {
    getAgentProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getAgentProfiles })(AgentProfiles);
