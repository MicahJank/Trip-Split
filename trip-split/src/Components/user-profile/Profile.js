import React, { useState } from "react";

import { Button } from 'semantic-ui-react';

const Profile = () => {

    // clears the local storage and reloads the page
    const clearStorage = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
        <h1>Users Profile</h1>
        <Button primary onClick={clearStorage}>Log Out</Button>
        </>
    );
};

export default Profile;