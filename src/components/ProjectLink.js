import React from 'react';

import {LabelToIcon} from '../constants/icons';

import {Row, Selectable, Small, TextWrapper, TitleSmall} from './Generic';

const Icon = ({label}) =>
    <img
        alt={label}
        src={LabelToIcon[label]}
        style={{
            height: 'auto',
            marginLeft: 4,
            marginRight: 4,
            width: '15%'
        }}
    />;

export const ProjectLink = (project) =>
    <Selectable href={project.link}>
        <TextWrapper>
            <TitleSmall>{project.title}</TitleSmall>
            <Small>{project.subTitle}</Small>
            <Row>
                {project.labels.map((label) => <Icon label={label} />)}
            </Row>
        </TextWrapper>
    </Selectable>;
