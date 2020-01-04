import React from 'react';

import {Body, BodyTitle, Image, ListItem, Page, SpacedRow, Subtitle, TextWrapper, Title} from './components/Generic';
import {intro} from './constants/intro';
import Headshot from './assets/Headshot.jpg';
import {ProjectLink} from './components/ProjectLink';
import {projects} from './constants/projects';
import {APOLLO_CLIENT, GRAPHQL, JAVASCRIPT, NODEJS, REACT, REACT_NATIVE, REDUX, TYPESCRIPT} from './constants/icons';

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
                    <ListItem label={JAVASCRIPT}>{'JavaScript'}</ListItem>
                    <ListItem label={TYPESCRIPT}>{'TypeScript'}</ListItem>
                    <ListItem label={REACT_NATIVE}>{'React-Native'}</ListItem>
                    <ListItem label={NODEJS}>{'NodeJS'}</ListItem>
                    <ListItem label={GRAPHQL}>{'GraphQL'}</ListItem>
                    <ListItem label={APOLLO_CLIENT}>{'Apollo Client'}</ListItem>
                    <ListItem label={REDUX}>{'Redux'}</ListItem>
                </TextWrapper>
            </TextWrapper>
            <TextWrapper>
                <BodyTitle>{'Projects'}</BodyTitle>
                {projects.map((project) => <ProjectLink {...project} />)}
            </TextWrapper>
        </SpacedRow>
    </Page>;

export default App;
