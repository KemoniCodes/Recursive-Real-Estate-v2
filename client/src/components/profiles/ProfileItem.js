import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../scss/profile.scss';

const ProfileItem = ({ profile: {
    user: { _id, name, email },
    jobtitle,
    phone,
    photo
}
}) => {
   
    return (
        <div className="agents-page">
            <div className="row">
                <div>
                    <img src={photo} alt="" />
                    <div className="agent-info">
                        <p>{name}</p>
                        <p className="title">{jobtitle}</p>
                        <ul>
                            <li>| {phone}</li>
                            <li>| {email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;
