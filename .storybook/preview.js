import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}

import { knob } from '@storybook/addon-knobs';
import { addons, makeDecorator } from '@storybook/addons';
import { addDecorator, getStorybook } from '@storybook/angular';

export function colorCssVariable(
  name,
  value,
  groupId
) {
  const knobValue = knob(name, { type: 'color', value, groupId });
  document.documentElement.style.setProperty(name, knobValue);

  return knobValue;
}

export function textCssVariable(name, value, groupId) {
  const knobValue = knob(name, { type: 'text', value, groupId });
  document.documentElement.style.setProperty(name, knobValue);

  return knobValue;
}

const typeToCssVariableKnob = {
  text: (name, value, groupId) =>
    textCssVariable(name, value, groupId),
  color: (name, value, groupId) =>
    colorCssVariable(name, value, groupId),
};

export const withCssVariablesKnobs = makeDecorator({
  name: 'withCssVariablesKnobs',
  parameterName: 'cssVariablesKnobs',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    if (parameters && !Array.isArray(parameters)) {
      throw new Error(
        'cssVariablesKnobs must an array of type { variable, type, initialValue, groupId }'
      );
    }

    parameters
      .filter(({ type }) => type in typeToCssVariableKnob)
      .forEach(({ variable, type, initialValue, groupId }) => {
        typeToCssVariableKnob[type](variable, initialValue, groupId);
      });

    addons.getChannel().once('setCurrentStory', () => {
      parameters.forEach(({ variable }) => {
        document.documentElement.style.removeProperty(variable);
      });
    });

    return getStory(context);
  },
});

addDecorator(withCssVariablesKnobs);
