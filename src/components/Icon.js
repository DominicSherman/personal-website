import React from 'react';

import {LabelToIcon} from '../constants/icons';

export const Icon = ({label}) =>
    <img
        alt={label}
        src={LabelToIcon[label]}
        style={{
            height: 32,
            marginLeft: 4,
            marginRight: 4,
            width: 'auto'
        }}
    />;
