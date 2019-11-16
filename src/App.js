import React from 'react';

import './css/App.css';
import {Body, BodyTitle, Image, ListItem, Page, SpacedRow, Subtitle, TextWrapper, Title} from './components/Generic';
import {backgroundGray, white} from './styles/colors';
import {intro} from './constants/intro';
import Headshot from './assets/Headshot.jpg';

const App = () => {
    document.body.style.backgroundColor = backgroundGray;
    document.body.style.color = white;

    return (
        <Page>
            <Image
                src={Headshot}
                style={{
                    height: 'auto',
                    width: 150
                }}
            />
            <Title>{'Dominic Sherman'}</Title>
            <Subtitle>{'Full-Stack Web & Mobile Developer'}</Subtitle>
            <SpacedRow>
                <TextWrapper>
                    <BodyTitle>{'About Me'}</BodyTitle>
                    <Body>{intro}</Body>
                </TextWrapper>
                <TextWrapper>
                    <BodyTitle>{'Preferred Tools'}</BodyTitle>
                    <ul style={{marginLeft: 50}}>
                        <ListItem>{'JavaScript / TypeScript'}</ListItem>
                        <ListItem>{'React / React-Native'}</ListItem>
                        <ListItem>{'NodeJS'}</ListItem>
                        <ListItem>{'GraphQL'}</ListItem>
                    </ul>
                </TextWrapper>
                <TextWrapper>
                    <BodyTitle>{'Projects'}</BodyTitle>
                    <Body>{''}</Body>
                </TextWrapper>
            </SpacedRow>
        </Page>
    );
};

export default App;
