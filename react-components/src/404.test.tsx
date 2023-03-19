import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import ErrorPage from './404';

describe ('Error', () => {
    it('Renders error', () => {
        render(<ErrorPage />)

        expect(screen.getByRole('heading', {
            level: 1
        })).toHaveTextContent('You are trying to access wrong path. please check!')
    })
})