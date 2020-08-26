import React from 'react';

import Carousel from '../src/Carousel';
import slides from '../example/slides';

export default {
    title: 'Carousel',
    component: Carousel,
};

export const Carousels = () => <Carousel slides={slides} />;
Carousels.story = {
    name: 'Default behavior',
}
