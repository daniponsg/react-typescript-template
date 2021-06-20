/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

import src from './logo.svg';
import './welcome.scss';

const Welcome: React.FC = (): React.ReactElement => {
    const { t } = useTranslation();

    return (
        <header className="App-header">
            <img src={src} className="App-logo" alt="logo" />
            <p>{t('global:welcome')}</p>
        </header>
    );
};

export default Welcome;
