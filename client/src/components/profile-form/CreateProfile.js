import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        jobtitle: '',
        phone: '',
        photo: '',
        agent: '',
        saves: [],
    });

    const {
        jobtitle,
        phone,
        photo,
        agent,
        saves
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData)
    };
    // const unCheckRadio = e => setFormData({ ...formData, [e.target.name]: e.target.value })



    return (
        <div>
            <h1>Create Profile</h1>
            <form method="post"onSubmit={e => onSubmit(e)} enctype="multipart/form-data" action="/">
                <label>
                    Job Title
                    <input type="text" value={jobtitle} onChange={e => onChange(e)} placeholder='Job Title' name='jobtitle' />
                </label>
                <label>
                    Phone Number
                    <input type="text" value={phone} onChange={e => onChange(e)} placeholder='Phone number' name='phone' />
                </label>
                <label>
                    Photo
                    <input type="file" value={photo} onChange={e => onChange(e)} placeholder='Photo' name='photo' />
                </label>
                <label>
                    Agent
                    <input type="text" onChange={e => onChange(e)} value={agent} placeholder='Agent' name='agent' />
                </label>
                <button className='btn' value="Upload" type="submit">Create Profile</button>
            </form>
        </div>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};


export default connect(null, { createProfile })(withRouter(CreateProfile));

