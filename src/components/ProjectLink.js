import React from 'react';

import {Selectable, Small, TextWrapper, TitleSmall} from './Generic';

export const ProjectLink = (project) =>
    <Selectable href={project.link}>
        <TextWrapper>
            <TitleSmall>{project.title}</TitleSmall>
            <Small>{project.subTitle}</Small>
        </TextWrapper>
    </Selectable>;
