import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../img/spinner.gif';
import { getAgentProfiles } from '../../actions/profile';

const AgentProfiles = ({ getAgentProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getAgentProfiles();
    }, []);

    return (
        <div>

        </div>
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
