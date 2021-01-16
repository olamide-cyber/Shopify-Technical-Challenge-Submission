import React from 'react';
import { render } from '@testing-library/react';
import MovieList from './MovieList';

describe('MovieList component tests', () => {
    const movies = [
        {
            title: 'The Vampire Diaries',
            year: '2009–2017',
            img: 'https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg',
        },
        {
            title: 'Abraham Lincoln: Vampire Hunter',
            year: '2012',
            img: 'https://m.media-amazon.com/images/M/MV5BNjY2Mzc0MDA4NV5BMl5BanBnXkFtZTcwOTg5OTcxNw@@._V1_SX300.jpg',
        },
        {
            title: 'Lucifer',
            year: '2016',
            img: 'https://m.media-amazon.com/images/M/MV5BNzY1YjIxOGMtOTAyZC00YTcyLWFhMzQtZTJkYTljYzU0MGRlXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg'
        }
    ]

    it('should render a movie list title', () => {
        const component = render(
            <MovieList
                movies={movies}
                title="Movie Results"
            />
        );

        const componentElement = component.container.children[0];

        console.log(componentElement.outerHTML)

        expect(componentElement.className).toBe('movie-list');
        expect(componentElement.querySelector('.movie-header')).toHaveTextContent(props.title);
        
    });

    it('should render a movie list error message', () => {
        const component = render(
            <MovieList
                movies={movies}
                errorMessage="Movie not found, please try again"
            />
        );
        // there is error message
        const componentElement = component.container.children[0];
        expect(componentElement.querySelector('.error-message')).toHaveTextContent(`${props.errorMessage}`)
    });

    it('should render a movie list spinner', () => {
        const component = render(
            <MovieList
                movies={movies}
            />
        );
        // there is spinner and no movies
    });

    it('should render a movie list movies', () => {
        const component = render(
            <MovieList
                movies={movies}
            />
        );
        // there are 3 movie component
    });
});
