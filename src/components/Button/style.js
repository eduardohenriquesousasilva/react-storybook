import styled, { css } from 'styled-components';

import * as theme from 'themes/Button';

export default styled.button`
    color: ${theme.highlightColor};
    background: ${theme.primaryColor};
    border-color: ${theme.highlightColor};
    padding: 10px;

    ${theme.mode}

    ${({ clickable }) => clickable && css`
        &:hover {
            opacity: .7;
            cursor: pointer;
        }
    `}
`;
