import React from 'react';
import { render } from '@testing-library/react';
import Movie from './Movie';

describe('Movie component tests', () => {
    const movie = {
        title: 'The Vampire Diaries',
        year: '2009–2017',
        img: 'https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg',
    };

    it('should render a movie image, title and nominate button', () => {
        const component = render(
            <Movie
                movie={movie}
            />
        );

        const componentElement = component.container.children[0];

        expect(componentElement.className).toBe('movie');

        // Test movie image attributes
        expect(componentElement.querySelector('.movie-image')).toHaveAttribute('src', movie.img);
        expect(componentElement.querySelector('.movie-image')).toHaveAttribute('alt', movie.title);

        // Test movie title attributes
        expect(componentElement.querySelector('.movie-title-action span')).toHaveTextContent(`${movie.title} (${movie.year})`);

        // Test movie action
        expect(componentElement.querySelector('.movie-action.nominate')).toBeTruthy();
        expect(componentElement.querySelector('.movie-action.nominate')).not.toBeDisabled();
        expect(componentElement.querySelector('.movie-action.remove')).toBeFalsy();
    });

    it('should render a removal button', () => {
        const component = render(
            <Movie
                movie={movie}
                isRemoval
            />
        );

        const componentElement = component.container.children[0];

        // Test movie action
        expect(componentElement.querySelector('.movie-action.nominate')).toBeFalsy();
        expect(componentElement.querySelector('.movie-action.remove')).toBeTruthy();
    });

    it('should render a disabled nominate button', () => {
        const component = render(
            <Movie
                movie={movie}
                nominated
            />
        );

        const componentElement = component.container.children[0];

        // Test movie action
        expect(componentElement.querySelector('.movie-action.nominate')).toBeTruthy();
        expect(componentElement.querySelector('.movie-action.nominate')).toBeDisabled();
    });

    it('should trigger onAdd action when add button is clicked', () => {
        const onAdd = jest.fn();

        const component = render(
            <Movie
                movie={movie}
                onAdd={onAdd}
            />
        );

        const componentElement = component.container.children[0];

        // Test onAdd
        componentElement.querySelector('.movie-action.nominate').click();
        componentElement.querySelector('.movie-action.nominate').click();

        // How many times did we click?
        expect(onAdd).toBeCalledTimes(2);
    });

    it('should trigger onRemove action when add button is clicked', () => {
        const onRemove = jest.fn();

        const component = render(
            <Movie
                movie={movie}
                isRemoval
                onRemove={onRemove}
            />
        );

        const componentElement = component.container.children[0];

        // Test onRemove
        componentElement.querySelector('.movie-action.remove').click();
        componentElement.querySelector('.movie-action.remove').click();
        componentElement.querySelector('.movie-action.remove').click();

        // How many times did we click?
        expect(onRemove).toBeCalledTimes(3);
    });
});
