/* Amplify Params - DO NOT EDIT
	API_MYFITRACKRV2_GRAPHQLAPIENDPOINTOUTPUT
	API_MYFITRACKRV2_GRAPHQLAPIIDOUTPUT
	API_MYFITRACKRV2_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.API_MYFITRACKRV2_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_MYFITRACKRV2_GRAPHQLAPIKEYOUTPUT;

export const query = /* GraphQL */ `
  mutation CreateMyfitrackrv2DB(
    $input: CreateMyfitrackrv2DBInput!
    $condition: ModelMyfitrackrv2DBConditionInput
  ) {
    createMyfitrackrv2DB(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 export const handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    console.log("GraphQL KEY", GRAPHQL_API_KEY)
    console.log("GraphQL Endpoint", GRAPHQL_ENDPOINT)

  
    const variables = {
      input: {
        id: '01',
        count: 13
      }
    };
  
    /** @type {import('node-fetch').RequestInit} */
    const options = {
      method: 'POST',
      headers: {
        'x-api-key': GRAPHQL_API_KEY
      },
      body: JSON.stringify({ query, variables })
    };
  
    const request = new Request(GRAPHQL_ENDPOINT, options);
  
    let statusCode = 200;
    let body;
    let response;
  
    try {
      response = await fetch(request);
      body = await response.json();
      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 400;
      body = {
        errors: [
          {
            status: response.status,
            message: error.message,
            stack: error.stack
          }
        ]
      };
    }
  
    return {
      statusCode,
      body: JSON.stringify(body)
    };
  };