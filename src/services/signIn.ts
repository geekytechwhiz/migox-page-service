import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SignInResponse } from '../interfaces';
import {
  JWT_SECRET,
  TOKEN_EXPIRED_160_DAYS,
  USER_STABLE
} from '../utils/constants';
import DBContext, { QueryItem } from '../utils/dataContext';
// import { UserRole } from '../enums/profile-status.enum';

const dbContext = new DBContext()
async function signToken(user: any, hasRemember = false) {
  const secret = Buffer.from(JWT_SECRET, 'base64');
  ;
  return jwt.sign({ email: user.UserName, roles: ['USER'] }, secret, {
    expiresIn: hasRemember ? 86400 + TOKEN_EXPIRED_160_DAYS : 86400, // 86400 sec is 24 hours
  });
}
function comparePassword(eventPassword: any, userPassword: any) {
  ;
  if (!eventPassword || !userPassword) {
    return null;
  }
  return bcrypt.compare(eventPassword, userPassword);
}

export const signIn = async (args: any) => {
  let response: SignInResponse = {Role:"",  Auth: false, Token: '', Status: { Code: 200, Message: "" } }
  try {
    const user = await getUser(args.UserName, args.UserType);
    ;
    if (!user || (args && !args.Password) || (user && !user.Password)) {
      response.Status = {
        Code: 404,
        Message: 'User Not found',
      }
      return response;
    };

    const isValidPassword = await comparePassword(args.Password, user.Password);

    if (isValidPassword) {
      const token = await signToken(user, args.Remember);
      if (!token) return response;
      response = {
        Auth: true,
        Token: token,
        Role:user.UserRole,
        Status: {
          Code: 200,
          Message: 'Success',
        },
      };
      return response;
    } else {
      return {
        Auth: false,
        Token: null,
        Status: {
          Code: 401,
          Message: 'unauthorized',
        },
      };

    }
  } catch (err: any) {
    response.Status = {
      Code: 500,
      Message: 'internal server error',
    };
    return Promise.reject(response);
  }
};

export const getUser = async (userName: string, userType: string) => {
  const params: QueryItem = {
    TableName: USER_STABLE,
    KeyConditionExpression: "PK = :PK AND SK = :SK",
    ExpressionAttributeValues: {
      ":PK": userName,
      ":SK": userType
    }, 
  };

  try {
    const results = await dbContext.query(params);
    return results.Items[0];
  } catch (error: any) {
    console.error(error);
    return error;
    // throw new createError.InternalServerError(error);
  }
};
export const GetBrand = () => {
  console.info('Get Brand Called');
};
