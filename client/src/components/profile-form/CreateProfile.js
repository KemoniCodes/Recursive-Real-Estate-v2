import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        jobtitle: '',
        phone: '',
        agent: '',
        email: '',
        saves: [],
    });

    const [image, setImage] = useState("");

    const {
        jobtitle,
        phone,
        agent,
        email,
        saves,
    } = formData;

    const onFileChange = (e) => {
        setImage(e.target.files[0].name);
    };
    const onChange = (e) => {
        setFormData
            ({ ...formData, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const fd = new FormData();

        fd.append("jobtitle", jobtitle)
        fd.append("phone", phone)
        fd.append("saves", saves)
        fd.append("agent", agent)
        fd.append("photo", image)

        createProfile(fd, history);
    };


    return (
        <div>
            <h1>Create Profile</h1>
            <form onSubmit={(e) => onSubmit(e)}
                encType="multipart/form-data" action="/" method="POST">
                <label>
                    Job Title
                    <input type="text" value={jobtitle} onChange={(e) => onChange(e)} placeholder='Job Title' name='jobtitle' />
                </label>
                <label>
                    Phone Number
                    <input type="text" value={phone} onChange={(e) => onChange(e)} placeholder='Phone number' name='phone' />
                </label>
                <label>
                    Photo
                    <input name='photo' type="file" onChange={(e) => onFileChange(e)}
                        accept="image/*" />
                </label>
                <label>
                    Agent
                    <input type="text" onChange={(e) => onChange(e)} value={agent} placeholder='Agent' name="agent" />
                </label>
                <button className='btn' type="submit">Create Profile</button>

                <Link to='/dashboard'>
                    <button className='btn'>
                        Go Back
                    </button>
                </Link>
            </form>
        </div>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};


export default connect(null, { createProfile })(withRouter(CreateProfile));

