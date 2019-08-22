import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import SignUpForm from './SignUpForm.js';
import LogInForm from './LogInForm.js';

import { Button } from 'semantic-ui-react';

import styled from 'styled-components';

const FormContainer = styled.div`
    display flex;
    flex-direction: column;
    width: 200px;
    margin: auto;
    position: absolute;
    top: 30%;
    left: 30%;

    form.ui.form {
        width: 100%;
        input {
           margin-bottom: 10px;
            width: 100%;
        }
    }

    div {
        color: red;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    .ui.button {
        margin-top: 10px;
    }

`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 35%;
    

    .ui.button {
        width: 150px;
        margin-top: 10px;

    }
`;

const Home = () => {

    // this component is only rendered when the path is on '/'
    const Buttons = () => {

        return (
            <ButtonContainer>
                <NavLink exact to={'/sign-up'}><Button>Sign Up</Button></NavLink>
                <NavLink exact to={'/login'}><Button>Log In</Button></NavLink>
            </ButtonContainer>
        );
    };

    return (
        <>
        <FormContainer>
            <Route path='/sign-up' component={SignUpForm}/>
            <Route path='/login' component={LogInForm}/>
        </FormContainer>
        <Route exact path='/' component={Buttons} />

        
        </>
    );
};

export default Home;