import React from 'react'
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
    return (
        <div>
            <Link to='/edit-profile'>Edit Profile</Link>
            <Link to='/saved-homes'>See saved homes</Link>
        </div>
    )
};

export default DashboardActions;