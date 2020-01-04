import React from 'react';

import {Row, Selectable, Small, TextWrapper, TitleSmall} from './Generic';
import {Icon} from './Icon';

export const ProjectLink = (project) =>
    <Selectable href={project.link}>
        <TextWrapper>
            <TitleSmall>{project.title}</TitleSmall>
            <Small>{project.subTitle}</Small>
            <Row style={{marginTop: 12}}>
                {project.labels.map((label) => <Icon label={label} />)}
            </Row>
        </TextWrapper>
    </Selectable>;
