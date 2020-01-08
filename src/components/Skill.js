import React from 'react';

import {LabeledIcon} from './LabeledIcon';
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
        <LabeledIcon
            label={props.label}
        />
    </Row>;
