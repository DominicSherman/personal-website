import React from 'react';

import {Body, Column, Small, TitleSmall} from './Generic';

export const ExperienceItem = (props) =>
    <Column style={{marginBottom: 32}}>
        <TitleSmall>{props.title}</TitleSmall>
        <Small style={{fontWeight: '600'}}>{props.dates}</Small>
        <Body style={{marginTop: 8}}>{props.body}</Body>
    </Column>;
