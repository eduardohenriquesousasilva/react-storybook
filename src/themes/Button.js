import { css } from 'styled-components';
import theme from 'styled-theming';

import COLORS from 'constants/colors';

export const colorOptions = [
    'dark',
    'danger',
    'warning',
    'primary',
    'neutral',
    'success',
    'information',
];

/**
 * Cores primárias
 */
const primaryColorScheme = {
    dark: COLORS.dark,
    danger: COLORS.danger,
    primary: COLORS.primary,
    neutral: COLORS.neutral,
    success: COLORS.success,
    warning: COLORS.warning,
    information: COLORS.information,
};
export const primaryColor = theme('color', primaryColorScheme);

/**
 * Cor de destaque para o botão
 */
const highlightColorScheme = {
    dark: COLORS.light,
    danger: COLORS.light,
    warning: COLORS.dark,
    neutral: COLORS.dark,
    primary: COLORS.light,
    success: COLORS.light,
    information: COLORS.light,
};
export const highlightColor = theme('color', highlightColorScheme);

/**
 * Modelos de botão
 */
export const mode = theme('mode', {
    default: css`
        border: 0;
    `,
    outlined: (props) => css`
        border-width: 1px;
        border-style: solid;
        color: ${primaryColorScheme[props.theme.color]};
        background: ${COLORS.light};
        border-color: ${primaryColorScheme[props.theme.color]};
    `
});