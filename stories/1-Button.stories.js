import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

Emoji.story = {
  name: 'with emoji',
};

import { storiesOf } from '@storybook/react'
import Carousel from '../src/Carousel';
import slides from '../example/slides';

storiesOf('Carousel', module).add('default', () => {
  <Carousel slides={slides} />
});