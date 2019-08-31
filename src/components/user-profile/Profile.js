import React, { useState, useEffect } from "react";

import axios from 'axios';

import { Button, Image, Icon, Menu } from 'semantic-ui-react';

import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 800px;

    padding: 30px;

    i {
        font-size: 7rem;
        cursor: pointer;
    }

    h1 {
        font-size: 3rem;
    }

    button.log-out {
        width: 200px;
    }

`;

const Profile = ({history}) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://tripsplitr.herokuapp.com/users/${localStorage.getItem('currentUserId')}`)
            .then(res => {
               setUser(res.data);
            })
            .catch(err => {
                alert(err);
            })
    }, []);

    // clears the local storage and reloads the page
    const clearStorage = () => {
        localStorage.clear();
        history.push('/');
    };

    return (
        <Container>
            <Icon color='grey' name='user' circular={true} />
            <h1>{user.name}</h1>
            <Button.Group size='large' className='settings' vertical>
                <Button className='tab' content='Settings' />
                <Button className='tab' content='User Preferences' />
                <Button className='tab' content='Contact Us' />
            </Button.Group>
            <Button className='log-out' fluid={false} primary onClick={clearStorage}>Log Out</Button>
        </Container>
    );
};

export default Profile;