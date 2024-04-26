import axios from 'axios';
import { BASE_URL, USER_STABLE } from './constants';
import DBContext from './dataContext';
export const SetAsync = () => { };

const dbContext = new DBContext()
export const GetAsync = async (method: any) => {
  const url = getUrl(method);
  const result = await axios.get(url);
  return result.data;
};

export const PostUserAsync = async (method, req: any) => {
  const url = getUrl(method);
  // const headers = createHeader(req.header);// Will be removed once CORS for custom header issue fixed
  const headers = {
    'X-MIBAPI-Token': 'test',
    'X-MIBAPI-CustomerID': '1545',
    'X-MIBAPI-CustomerType': 'Brand',
    'X-MIBAPI-Source': 'Brand',
    'X-MIBAPI-Trace-Id': 'hdfsrdsfudsgdshgd6454ds8d84d',
  };
  try {
    const response = await axios.post(url, req.body, { headers });
    console.log('Create User: response:', {
      message: 'Request received',
      url: response.config.url,
      data: response.data,
      status: response.status,
    });
    return response;
  } catch (err) {
    console.error(`Error ${err}`);
  }
};

const getUrl = (method) => {
  const url = `${BASE_URL}${method}`;
  return url;
};

export const getUserByEmailID = async (emailID: any) => {
  const params = {
    TableName: USER_STABLE,
    Key: {
      EmailId: emailID,
    },
    ConsistentRead: true,
    ReturnConsumedCapacity: 'TOTAL',
  };

  try {
    const results: any = await dbContext.get(params)

    if (!results.Item) {
      throw { Respone: 'User not found' };
    }
    return results.Item;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};

// const createHeader = (req) => {
//   return {
//     'X-MIBAPI-Token': req.Token,
//     'X-MIBAPI-CustomerID': req.CustomerID,
//     'X-MIBAPI-CustomerType': req.CustomerType,
//     'X-MIBAPI-Source': req.Source,
//     'X-MIBAPI-Trace-Id': req.TraceID,
//   };
// };
