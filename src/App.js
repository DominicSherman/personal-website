import React from 'react';
import {GitHub, Linkedin, Mail} from 'react-feather';

import {Body, BodyTitle, Column, Image, Page, SpacedRow, Subtitle, TextWrapper, Title} from './components/Generic';
import {intro} from './constants/intro';
import Headshot from './assets/Headshot.jpg';
import {ProjectLink} from './components/ProjectLink';
import {projects} from './constants/projects';
import {
    APOLLO_CLIENT,
    FIREBASE,
    GRAPHQL,
    JAVASCRIPT,
    JEST,
    NODEJS,
    REACT_NATIVE,
    REDUX,
    TYPESCRIPT
} from './constants/icons';
import {Skill} from './components/Skill';
import {ExperienceItem} from './components/ExperienceItem';
import {experiences} from './constants/experience';
import {colors} from './styles/colors';
import {SelectableIcon} from './components/SelectableIcon';
import {EMAIL_LINK, GITHUB_LINK, LINKED_IN_LINK} from './constants/urls';

const App = () =>
    <Page>
        <Column
            style={{
                alignItems: 'center',
                background: `linear-gradient(${colors.lightGray}, ${colors.gray})`,
                paddingBottom: 32,
                paddingTop: 32,
                width: '100%'
            }}
        >
            <Image
                src={Headshot}
                style={{
                    borderRadius: 400,
                    height: 'auto',
                    width: 150
                }}
            />
            <Title style={{color: colors.white}}>{'Dominic Sherman'}</Title>
            <Subtitle style={{color: colors.white}}>{'Full-Stack Web & Mobile Developer'}</Subtitle>
            <SpacedRow style={{marginTop: 32}}>
                <SelectableIcon
                    ComponentType={GitHub}
                    href={GITHUB_LINK}
                    label={'Github'}
                />
                <SelectableIcon
                    ComponentType={Linkedin}
                    href={LINKED_IN_LINK}
                    label={'LinkedIn'}
                />
                <SelectableIcon
                    ComponentType={Mail}
                    href={EMAIL_LINK}
                    label={'Email'}
                />
            </SpacedRow>
        </Column>
        <SpacedRow style={{marginTop: 32}}>
            <TextWrapper style={{alignItems: 'center'}}>
                <BodyTitle>{'About Me'}</BodyTitle>
                <Body>{intro}</Body>
                <TextWrapper style={{width: 150}}>
                    <BodyTitle>{'Skills'}</BodyTitle>
                    <Skill label={JAVASCRIPT}>{'JavaScript'}</Skill>
                    <Skill label={TYPESCRIPT}>{'TypeScript'}</Skill>
                    <Skill label={REACT_NATIVE}>{'React'}</Skill>
                    <Skill label={REACT_NATIVE}>{'React-Native'}</Skill>
                    <Skill label={GRAPHQL}>{'GraphQL'}</Skill>
                    <Skill label={APOLLO_CLIENT}>{'Apollo Client'}</Skill>
                    <Skill label={NODEJS}>{'NodeJS'}</Skill>
                    <Skill label={JEST}>{'Jest'}</Skill>
                    <Skill label={REDUX}>{'Redux'}</Skill>
                    <Skill label={FIREBASE}>{'Firebase'}</Skill>
                </TextWrapper>
            </TextWrapper>
            <TextWrapper>
                <BodyTitle>{'Experience'}</BodyTitle>
                {experiences.reverse().map((experience) => <ExperienceItem {...experience} />)}
            </TextWrapper>
            <TextWrapper>
                <BodyTitle>{'Projects'}</BodyTitle>
                {projects.map((project) => <ProjectLink {...project} />)}
            </TextWrapper>
        </SpacedRow>
    </Page>;

export default App;
