import React from 'react';

import {colors} from '../styles/colors';

import {Body, Selectable, SpacedRow} from './Generic';

export const SelectableIcon = ({href, style, label, ComponentType}) =>
    <Selectable
        href={href}
        style={{margin: 12}}
    >
        <SpacedRow style={{alignItems: 'center'}}>
            <ComponentType
                style={{
                    color: colors.lightGray,
                    height: 25,
                    marginRight: 6,
                    ...style
                }}
            />
            <Body style={{color: colors.lightGray}}>{label}</Body>
        </SpacedRow>
    </Selectable>;
