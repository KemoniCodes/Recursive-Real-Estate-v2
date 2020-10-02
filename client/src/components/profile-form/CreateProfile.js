import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
    const [formData, setFormData] = useState({
        jobtitle: '',
        phone: '',
        photo: '',
        agent: null,
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

    // const unCheckRadio = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    

    return (
        <div>
            <h1>Create Profile</h1>
            <form action="">
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
                    <input type="radio" value={agent} onChange={e => onChange(e)} placeholder='Agent' name='agent' />
                </label>
                <button className= 'btn' value="" type="submit">Create Profile</button>
            </form>
        </div>
    )
}

CreateProfile.propTypes = {

}

export default CreateProfile

