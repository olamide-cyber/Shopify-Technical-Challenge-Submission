import React from 'react';
import { render } from '@testing-library/react';
import MovieList from './MovieList';
import {movies} from '../../test-mock/movies';

describe('MovieList component tests', () => {
    it('should render a movie list title', () => {
        const component = render(
            <MovieList
                movies={movies}
                nominatedMovies={[]}
                title="Movie Results"
            />
        );

        const componentElement = component.container.children[0];

        expect(componentElement.className).toMatch('movie-list');
        expect(componentElement.querySelector('.movie-header')).toHaveTextContent('Movie Results');
    });

    it('should render a movie list error message', () => {
        const component = render(
            <MovieList
                movies={movies}
                nominatedMovies={[]}
                errorMessage="Movie not found, please try again"
            />
        );
        // there is error message
        const componentElement = component.container.children[0];
        expect(componentElement.querySelector('p.error-message')).toHaveTextContent('Movie not found, please try again');
    });

    it('should render a movie list spinner and no movies when it is loading', () => {
        const component = render(
            <MovieList
                movies={movies}
                nominatedMovies={[]}
                isLoading
            />
        );
        // there is spinner and no movies
        const componentElement = component.container.children[0];
        expect(componentElement.querySelector('.spinner')).toBeTruthy();
        expect(componentElement.querySelector('.movie')).toBeFalsy();
    });

    it('should render a movie list movies', () => {
        const component = render(
            <MovieList
                movies={movies}
                nominatedMovies={[]}
                isLoading={false}
            />
        );
        const componentElement = component.container.children[0];
        // there are 3 movie component
        expect(componentElement.querySelectorAll('.movie')).toHaveLength(3);
    });
});
