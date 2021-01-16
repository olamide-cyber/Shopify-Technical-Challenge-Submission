import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner component test', () => {
    it('it should check for the parent class name and number of child elements it has', () => {
        const component = render(
            <Spinner />
        );

        const componentElement = component.container.children[0];

        expect(componentElement.className).toBe('sk-chase');
        
        expect(componentElement.querySelectorAll('.sk-chase-dot')).toHaveLength(6);
    });
})