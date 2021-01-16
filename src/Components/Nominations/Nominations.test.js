import React from 'react';
import { render } from '@testing-library/react';
import Nominations from './Nominations';
import {movies} from '../../test-mock/movies';

describe('Nominations component tests', () => {
    it('should render Nominations title', () => {
        const component = render(
            <Nominations
                nominatedMovies={movies}
            />
        );
        const componentElement = component.container.children[0];

        expect(componentElement.querySelector('.movie-header')).toHaveTextContent('Nominations');
    });

    it('should render a movie list component', () => {
        const component = render(
            <Nominations
                nominatedMovies={movies}
            />
        );
        // there movie list component
        const componentElement = component.container.children[0];

        expect(componentElement).toHaveClass('movie-list');
    });
});
