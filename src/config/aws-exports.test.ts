/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */
import '@testing-library/jest-dom';

import awsConfig, { ApiGatewayName } from './aws-exports';

describe('AWS Exports', (): void => {
    test('Contains auth inforomation', (): void => {
        expect(awsConfig.Auth).toBeTruthy();
        expect(awsConfig.Auth.region).toBeTruthy();
        expect(awsConfig.Auth.userPoolId).toBeTruthy();
        expect(awsConfig.Auth.userPoolWebClientId).toBeTruthy();
    });

    test('Contains API information', (): void => {
        expect(awsConfig.API).toBeTruthy();
        expect(awsConfig.API.endpoints).toBeTruthy();
        expect(awsConfig.API.endpoints[0]).toBeTruthy();
        expect(awsConfig.API.endpoints[0].name).toBeTruthy();
        expect(awsConfig.API.endpoints[0].endpoint).toBeTruthy();
        expect(awsConfig.API.endpoints[0].custom_header).toBeTruthy();
    });

    test('Exports ApiGatewayName', (): void => {
        expect(ApiGatewayName).toBeTruthy();
    });
});
