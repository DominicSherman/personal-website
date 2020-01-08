import React from 'react';
import styled from 'styled-components';

import {boxShadow, centeredColumn, centeredRow} from '../styles/shared-styles';
import {colors} from '../styles/colors';

export const Row = styled.div({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
});

export const Column = styled.div({
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column'
});

export const CenteredRow = styled.div({
    ...centeredRow
});

export const SpacedRow = styled.div({
    ...centeredRow,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
});

export const Page = styled.div({
    ...centeredColumn,
    width: '100vw'
});

export const Title = styled.p({
    fontSize: 32,
    fontWeight: 800,
    paddingBottom: 2,
    paddingTop: 2
});

export const Subtitle = styled.p({
    color: colors.gray,
    fontSize: 21
});

const BodyTitleText = styled.p({
    color: colors.black,
    fontSize: 25,
    fontWeight: 600
});

export const BodyTitle = (props) =>
    <CenteredRow
        style={{
            marginBottom: 16,
            width: '100%'
        }}
    >
        <BodyTitleText>
            {props.children}
        </BodyTitleText>
    </CenteredRow>;

export const TitleSmall = styled.p({
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 8
});

export const Body = styled.p({
    color: colors.gray,
    fontSize: 18
});

export const Small = styled.p({
    color: colors.gray,
    fontSize: 16
});

export const Image = styled.img({
    boxShadow
});

export const Icon = styled.img({

});

export const TextWrapper = styled.div({
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 16,
    width: 400
});

export const Selectable = styled.a({
    cursor: 'pointer'
});
