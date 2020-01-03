import React from 'react';

import {Body, BodyTitle, Image, ListItem, Page, SpacedRow, Subtitle, TextWrapper, Title} from './components/Generic';
import {intro} from './constants/intro';
import Headshot from './assets/Headshot.jpg';
import {ProjectLink} from './components/ProjectLink';
import {projects} from './constants/projects';

const App = () =>
    <Page>
        <Image
            src={Headshot}
            style={{
                borderRadius: 400,
                height: 'auto',
                width: 150
            }}
        />
        <Title>{'Dominic Sherman'}</Title>
        <Subtitle>{'Full-Stack Web & Mobile Developer'}</Subtitle>
        <SpacedRow style={{marginTop: 32}}>
            <TextWrapper>
                <BodyTitle>{'About Me'}</BodyTitle>
                <Body>{intro}</Body>
                <TextWrapper>
                    <BodyTitle>{'Preferred Tools'}</BodyTitle>
                    <ul style={{marginLeft: 20}}>
                        <ListItem>{'JavaScript'}</ListItem>
                        <ListItem>{'TypeScript'}</ListItem>
                        <ListItem>{'React'}</ListItem>
                        <ListItem>{'React-Native'}</ListItem>
                        <ListItem>{'NodeJS'}</ListItem>
                        <ListItem>{'GraphQL'}</ListItem>
                        <ListItem>{'Apollo Client'}</ListItem>
                    </ul>
                </TextWrapper>
            </TextWrapper>
            <TextWrapper>
                <BodyTitle>{'Projects'}</BodyTitle>
                {projects.map((project) => <ProjectLink {...project} />)}
            </TextWrapper>
        </SpacedRow>
    </Page>;

export default App;
