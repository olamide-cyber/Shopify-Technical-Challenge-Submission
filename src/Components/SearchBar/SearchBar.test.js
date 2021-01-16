import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';

describe('SearchBar component tests', () => {
    it('should render SearchBar elements', () => {
        const component = render(
            <SearchBar />
        );
        const componentElement = component.container.children[0];

        expect(componentElement).toHaveClass('search-bar');
        expect(componentElement.querySelector('.search-title')).toHaveTextContent('Movie title');
        expect(componentElement.querySelector('img')).toBeTruthy();
        expect(componentElement.querySelector('.search-input')).toBeTruthy();
    });

    it('should render a movie list component', () => {
        const onSearch = jest.fn();

        const component = render(
            <SearchBar
                onSearch={onSearch}
            />
        );

        const componentElement = component.container.children[0];

        // type into the input
        const searchInput = componentElement.querySelector('.search-input');
        userEvent.type(searchInput, 'luci');

        expect(onSearch).toHaveBeenCalledTimes(4);
    });
});
