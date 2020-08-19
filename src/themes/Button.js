import theme from 'styled-theming';

import COLORS from 'constants/colors';

export const colorOptions = [
    'dark',
    'light',
    'danger',
    'warning',
    'primary',
    'neutral',
    'success',
    'information',
];

export const primaryColor = theme('color',
{
    light: COLORS.light,
    dark: COLORS.dark,
    danger: COLORS.danger,
    primary: COLORS.primary,
    neutral: COLORS.neutral,
    success: COLORS.success,
    warning: COLORS.warning,
    information: COLORS.information,
});

export const highlightColor = theme('color',
{
    dark: COLORS.light,
    light: COLORS.dark,
    danger: COLORS.light,
    warning: COLORS.dark,
    neutral: COLORS.dark,
    primary: COLORS.light,
    success: COLORS.light,
    information: COLORS.light,
});