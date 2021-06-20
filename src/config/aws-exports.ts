/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

// import { Auth } from 'aws-amplify';
/*
import {
    ApiEndpoint,
    AuthUserPoolId,
    AuthUserPoolWebClientId,
    CloudFrontEndpoint,
    Region,
} from './env.json';
*/

export const ApiGatewayName = 'MyAPIGatewayAPI';
export const PublicApiGatewayName = 'MyPublicApiGateway';
export const CloudFrontName = 'MyApiCloudFront';
/*
const awsConfig = {
    Auth: {
        region: Region,
        userPoolId: AuthUserPoolId,
        userPoolWebClientId: AuthUserPoolWebClientId,
    },
    API: {
        endpoints: [
            {
                name: ApiGatewayName,
                endpoint: ApiEndpoint,
                custom_header: async (): Promise<any> => {
                    return {
                        Authorization: `Bearer ${(await Auth.currentSession())
                            .getIdToken()
                            .getJwtToken()}`,
                    };
                },
            },
            {
                name: PublicApiGatewayName,
                endpoint: ApiEndpoint,
            },
            {
                name: CloudFrontName,
                endpoint: CloudFrontEndpoint,
            },
        ],
    },
};


export default awsConfig;

*/