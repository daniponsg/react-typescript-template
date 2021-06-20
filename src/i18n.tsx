/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enGlobal from './i18n/en/global.json';

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true,
            useSuspense: false,
        },
    })
    .catch((error: any): void => {
        // tslint:disable-next-line: no-console
        console.error(error);
    });

i18next.addResourceBundle('en', 'global', enGlobal);

export default i18next;
