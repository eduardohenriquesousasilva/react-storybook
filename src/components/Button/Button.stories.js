import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './';
import { colorOptions } from 'themes/Button';

export default {
  title: 'Custom/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const example = Template.bind({});
example.args = {
  label: 'Some Text'
};

export const clickable = Template.bind({});
clickable.args = {
  label: 'Clickable Button',
  clickable: true,
  handleClick: action('clicked')
};
clickable.parameters = {
  docs: {
    description: {
      story: `Nos casos de botões que possuem interação de click, o atributo
              clickable deve ser informado com "true" para que o efeito
              de hover seja aplicado
      `
    }
  },
};

export const allColorSchemes = () => {
  return (
    <div>
      {colorOptions.map((colorOption) => (
        <Button color={colorOption} label={`Color: ${colorOption}`} clickable />
      ))}
    </div>
  );
}
allColorSchemes.parameters = {
  docs: {
    description: {
      story: `Exemplos com todos as cores de botões disponíveis para serem utilizadas,
              a label corresponde com o valor a ser informado na propriedade color
              para o usso desta opção
      `
    }
  },
};
