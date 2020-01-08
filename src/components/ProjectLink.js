import React from 'react';

import {colors} from '../styles/colors';

import {Row, Selectable, Small, TitleSmall} from './Generic';
import {Icon} from './Icon';

export const ProjectLink = (project) =>
    <Selectable
        href={project.link}
        style={{marginBottom: 32}}
    >
        <TitleSmall style={{color: colors.blue}}>{project.title}</TitleSmall>
        <Small>{project.subTitle}</Small>
        <Row style={{marginTop: 12}}>
            {project.labels.map((label) => <Icon label={label} />)}
        </Row>
    </Selectable>;
