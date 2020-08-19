import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';

import ContainerButton from './style';

/**
 * Componente de botão padrão
 */
const Button = ({ label, color, mode, clickable, handleClick }) => {
    return (
        <ThemeProvider theme={{color, mode}}>
            <ContainerButton clickable={clickable} onClick={handleClick}>{label}</ContainerButton>
        </ThemeProvider>
    );
};

Button.propTypes = {
    /**
     * Label do botão
     */
    label: PropTypes.string.isRequired,
    /**
     * Eschema de cores que será utilizado
     */
    color: PropTypes.oneOf([
        'dark', 'danger', 'warning', 'primary', 'neutral', 'success', 'information'
    ]),
    /**
     * Tipo de botão, variação de modelos
     */
    mode: PropTypes.oneOf([
        'default', 'outlined'
    ]),
    /**
     * Indicador se o botão possui interação, usado para aplicar o efeito
     * de hover no botão
     */
    clickable: PropTypes.bool,
    /**
     * Função para manipulação de evento de click do botão
     */
    handleClick: PropTypes.func,
};

Button.defaultProps = {
    color: 'success',
    mode: 'default',
    clickable: false,
};

export default Button;