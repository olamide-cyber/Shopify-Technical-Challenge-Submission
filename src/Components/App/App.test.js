import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
    it('should render App components', () => {
        const component = render(
            <App />
        );
        const appElement = component.container.children[0];

        expect(appElement).toHaveClass('app');
        expect(appElement.querySelector('.app-header')).toHaveTextContent('The Shoppies');
        expect(appElement.querySelector('.app-search-bar')).toBeTruthy();
        expect(appElement.querySelector('.search-results')).toBeTruthy();
        expect(appElement.querySelector('.nominations')).toBeTruthy();
    });
});
