import React, {useState} from 'react';

import { Route, NavLink } from 'react-router-dom';

import SignUpForm from './SignUpForm.js';
import LogInForm from './LogInForm.js';

import logo from './imgs/TripSplit-Logo.png';

import { Tween } from 'react-gsap';

import { Button, Divider, Grid, Segment, Image } from 'semantic-ui-react';

import styled from 'styled-components';

const FormContainer = styled.div`
    display flex;
    flex-direction: column;
    width: 200px;
    margin: auto;
    position: absolute;
    top: 30%;
    left: 30%;
    background: #f9fafb;
   

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
    background: #f9fafb;
    overflow: hidden;

    .error {
        color: red;
    }

    .ui.button {
        width: 150px;
        margin-top: 10px;

    }

    .segment {
        height: 100%;
    }

    .ui.horizontal.divider {
        :before {
            background-color: #f9fafb;
        }
        
    }
    img.logo {
        align-self: flex-start;
        background: white;
        margin-bottom: 30px;
        box-shadow: 1px 22px 31px -41px rgba(0,0,0,0.75);
    }

    h1 {
        font-weight: 600;
        font-size: 2rem;
        text-align:center;
        margin-bottom: 50px;
        color: #71cfc4;
    }
`;

const SignUpMain = styled.div`
    background-color:  #f9fafb;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .sign-in {
        height: 100%;
        background-color: #f9fafb;
    }
`;
// setCurrentUser is passed down as a prop on the login form since that is where it will be needed
const Home = ( { setIsLoggedIn, history } ) => {

  

    // this component is only rendered when the path is on '/'
    const Buttons = () => {

        return (
            <>
            <Tween from={{ y: '100px', opacity: 0}} duration={2} >
                <ButtonContainer> 
                <Segment padded='very' vertical={true} placeholder>

                <Image circular={true} verticalAlign='top' className='logo' centered={true} size='small' src={logo} /> 
                <h1>Welcome to TripSplit</h1>  
                    <Grid relaxed='very' stackable>
                        <Grid.Column>
                            <LogInForm history={history} />
                        </Grid.Column>
                    </Grid>
                    <Divider className='myDivider' horizontal>Or</Divider>
                    <Grid>
                        <Grid.Column verticalAlign='middle'>
                            <NavLink to={'/register/sign-up'}><Button color='olive' size='big'>Sign Up</Button></NavLink>
                        </Grid.Column>
                    </Grid>
            </Segment>
            </ButtonContainer>
           </Tween>
           </>
        );
    };

    return (
        <>
      
        <SignUpMain>
            <FormContainer>
                <Route path='/register/sign-up' render={(props) => <SignUpForm {...props} myProp={'Hello'} /> }/>
            </FormContainer>
            <div className='sign-in'>
                <Route exact path='/register' render={(props) => <Buttons {...props} />} />
            </div>
        </SignUpMain>
  
        </>
    );
};

export default Home;