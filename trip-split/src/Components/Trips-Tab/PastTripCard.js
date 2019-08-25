import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Card, Image, Icon, Feed } from 'semantic-ui-react';

// TODO: Use unsplash API to find and set the image of the place
const PastTripCard = ( { name, date, img } ) => {

    return (
    <Feed.Event>
        <Feed.Content>
            <Card fluid>
            <Image src={img} inline={true} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>{date}</Card.Meta>
                </Card.Content>
            </Card>
        </Feed.Content>
    </Feed.Event>
    );
};

export default PastTripCard;