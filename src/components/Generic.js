import React from 'react';
import styled from 'styled-components';

import {boxShadow, centeredColumn, centeredRow} from '../styles/shared-styles';

export const CenteredRow = styled.div({
    ...centeredRow
});

export const SpacedRow = styled.div({
    ...centeredRow,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 1000
});

export const CenteredColumn = styled.div({
    ...centeredColumn
});

export const Page = styled.div({
    ...centeredColumn,
    padding: 16,
    width: '100vw'
});

export const Title = styled.p({
    fontFamily: 'Viga',
    fontSize: 28,
    paddingBottom: 2,
    paddingTop: 2
});

export const Subtitle = styled.p({
    fontFamily: 'Merriweather Sans',
    fontSize: 21
});

const BodyTitleText = styled.p({
    fontFamily: 'Viga',
    fontSize: 21,
    fontWeight: '600'
});

export const BodyTitle = (props) =>
    <CenteredRow
        style={{
            marginBottom: 4,
            width: '100%'
        }}
    >
        <BodyTitleText>
            {props.children}
        </BodyTitleText>
    </CenteredRow>;

export const Body = styled.p({
    fontFamily: 'Merriweather Sans',
    fontSize: 16
});

export const Image = styled.img({
    borderRadius: 10,
    boxShadow
});

export const TextWrapper = styled.div({
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 16,
    width: 500
});

export const ListItem = (props) =>
    <li style={{margin: 4}}>
        <Body>{props.children}</Body>
    </li>;
