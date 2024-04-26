import { getUser } from '../services/signIn';
import { getUserFromToken } from '../services/utlis';
import { responseBuilder } from '../utils/helper';

export const handler = async function (event: any) {
  const userObj: any = await getUserFromToken(event.headers.Authorization);
  const dbUser = await getUser(userObj.UserName, userObj.UserType);
  const data = responseBuilder(dbUser);
  return data;
};
