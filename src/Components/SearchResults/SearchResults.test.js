import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from './SearchResults';
import {movies} from '../../test-mock/movies';

describe('SearchResults component tests', () => {
    it('should render SearchResults title', () => {
        const component = render(
            <SearchResults
                searchResults={movies}
                nominatedMovies={[]}
                searchTerm={null}
            />
        );
        const componentElement = component.container.children[0];

        expect(componentElement.querySelector('.movie-header').textContent).toBe('Results');
    });

    it('should render SearchResults title when there is a search term', () => {
        const component = render(
            <SearchResults
                searchResults={movies}
                nominatedMovies={[]}
                searchTerm='Luci'
            />
        );
        const componentElement = component.container.children[0];

        expect(componentElement.querySelector('.movie-header').textContent).toBe('Results for "Luci"');
    });

    it('should render a movie list component', () => {
        const component = render(
            <SearchResults
                searchResults={movies}
                nominatedMovies={[]}
            />
        );
        // there movie list component
        const componentElement = component.container.children[0];

        expect(componentElement).toHaveClass('movie-list');
    });
});
