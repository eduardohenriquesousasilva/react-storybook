import styled from 'styled-components';

import * as theme from 'themes/Button';

export default styled.button`
    background: ${theme.primaryColor};
    color: ${theme.highlightColor};
    border-width: 1px;
    border-style: solid;
    border-color: ${theme.highlightColor};
    padding: 10px;

    &:hover {
        background: ${({clickable}) => clickable ? theme.highlightColor : theme.primaryColor};
        color: ${({clickable}) => clickable ? theme.primaryColor : theme.highlightColor};
        border-color: ${({clickable}) => clickable ? theme.primaryColor : theme.highlightColor};
        cursor: ${({clickable}) => clickable ? 'pointer' : 'auto'};
    }
`;
