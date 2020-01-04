import React from 'react';

import {Icon} from './Icon';
import {Body, Row} from './Generic';

export const Skill = (props) =>
    <Row
        style={{
            justifyContent: 'space-between',
            marginTop: 4,
            width: 150
        }}
    >
        <Body>{props.children}</Body>
        <Icon
            label={props.label}
        />
    </Row>;
