import AWS from 'aws-sdk';
const dynamoDB = new AWS.DynamoDB();
const documentClient = new AWS.DynamoDB.DocumentClient();
export { dynamoDB, documentClient };

export const TWILIO_CONFIG = {
  // fromNumber: process.env.twilio_fromNumber || '+15017122661',
  // accountSid:
  //   process.env.twilio_accountSid || 'AC4456edea3518c403c56f653e6dcf1519',
  // authToken: process.env.twilio_authToken || 'bdaec2b5cc14f5814c2d1f3f6c6661bc',
};
