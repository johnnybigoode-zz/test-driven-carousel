import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import Carousel from '../src/Carousel';
import slides from '../example/slides';

export default {
    title: 'Carousel',
    decorators: [withKnobs],
    component: Carousel,
};

export const Carousels = () => <Carousel
    autoAdvanceDelay={number('autoAdvanceDelay', 10e3)}
    onIndexChange={action('onIndexChange')}
    slides={slides} />;

Carousels.story = {
    name: 'Default behavior',
}
