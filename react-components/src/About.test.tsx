import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import About from './About';

describe ('About', () => {
    it('Renders About', () => {
        render(<About />)

        expect(screen.getByRole('heading', {
            level: 1
        })).toHaveTextContent('About')
    })
})