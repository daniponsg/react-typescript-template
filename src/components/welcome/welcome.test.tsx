/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { render } from '@testing-library/react';
import React from 'react';

import Welcome from './welcome';

test('renders welcome', (): void => {
    const { getByText } = render(<Welcome />);
    const linkElement = getByText('global:welcome');
    expect(linkElement).toBeInTheDocument();
});
