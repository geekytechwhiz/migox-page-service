import AWS from 'aws-sdk';
const dynamoDB = new AWS.DynamoDB();
const documentClient = new AWS.DynamoDB.DocumentClient();

export { dynamoDB, documentClient };
