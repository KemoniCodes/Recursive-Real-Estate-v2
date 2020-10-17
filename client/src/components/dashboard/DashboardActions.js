import React from 'react'
import { Link } from 'react-router-dom';
import '../../scss/dashboard.scss'


export const DashboardActions = () => {
    return (
        <div className='dashboard-actions'>
            <Link to='/edit-profile'>Edit Profile</Link>
            <Link to='/saved-homes'>See Saved Homes</Link>
            <Link to='/posted-properties'>See Posted Properties</Link>
        </div>
    )
};

export default DashboardActions;