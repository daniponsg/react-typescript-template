/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

// tslint:disable-next-line: typedef
const useMock: any = [(k: any) => k, {}];
// tslint:disable-next-line: typedef
useMock.t = (k: any) => k;
useMock.i18n = {};

module.exports = {
    useTranslation: (): void => useMock,
};

export {};
