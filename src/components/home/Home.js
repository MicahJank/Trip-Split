import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import SignUpForm from './SignUpForm.js';
import LogInForm from './LogInForm.js';

import { Button, Divider, Grid, Segment, Form } from 'semantic-ui-react';

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
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .error {
        color: red;
    }

    .ui.button {
        width: 150px;
        margin-top: 10px;

    }
`;
// setCurrentUser is passed down as a prop on the login form since that is where it will be needed
const Home = ( { setIsLoggedIn, history } ) => {

    // this component is only rendered when the path is on '/'
    const Buttons = () => {

        console.log();

        return (
            <>
            <ButtonContainer>
             <Segment padded='very' vertical={true} placeholder>
             <Grid relaxed='very' stackable>
               <Grid.Column>
                 <LogInForm history={history} />
               </Grid.Column>
               </Grid>
               <Divider horizontal>Or</Divider>
            <Grid>
               <Grid.Column verticalAlign='middle'>
               <NavLink to={'/register/sign-up'}><Button color='olive' size='big'>Sign Up</Button></NavLink>
               </Grid.Column>
             </Grid>
           </Segment>
           </ButtonContainer>
           </>
        );
    };

    return (
        <>
        <FormContainer>
            {/* <Route path='/register/sign-up' component={SignUpForm} /> */}
            <Route path='/register/sign-up' render={(props) => <SignUpForm {...props} myProp={'Hello'} /> }/>
        </FormContainer>
        <Route exact path='/register' component={Buttons} />
        </>
    );
};

export default Home;
