import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MustNotBeIncluded } from '.';
import { modifyVariantsForStory } from '../../utils/modifyVariantsForStory';
import { VariantProps } from '../../stitches.config';

type AccordionVariants = VariantProps<typeof MustNotBeIncluded>;

const BaseMustNotBeIncluded = (props: any): JSX.Element => (
  <MustNotBeIncluded {...props} />
);
const MustNotBeIncludeForStory = modifyVariantsForStory<AccordionVariants, any>(
  BaseMustNotBeIncluded
);

export default {
  title: 'Components/Accordion',
  component: MustNotBeIncludeForStory,
} as ComponentMeta<typeof MustNotBeIncludeForStory>;

const Template: ComponentStory<typeof MustNotBeIncludeForStory> = ({
  size,
  ...args
}) => (
  <div>
    <MustNotBeIncludeForStory />
  </div>
);

export const Single = Template.bind({});
Single.args = {
  type: 'single',
  size: 'small',
};
Single.argTypes = {
  size: {
    control: 'inline-radio',
    options: ['small', 'medium', 'large'],
  },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Collapsible = Template.bind({});
Collapsible.args = {
  type: 'single',
  collapsible: true,
};
Collapsible.argTypes = {
  size: {
    control: 'inline-radio',
    options: ['small', 'medium', 'large'],
  },
};

export const MultipleCollapsible = Template.bind({});
MultipleCollapsible.args = {
  type: 'multiple',
  collapsible: true,
};
MultipleCollapsible.argTypes = {
  size: {
    control: 'inline-radio',
    options: ['small', 'medium', 'large'],
  },
};
