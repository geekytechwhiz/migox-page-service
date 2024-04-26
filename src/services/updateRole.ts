import createError from 'http-errors';
import { IUpdateUserRole } from '../models/updateRole';
import { USER_STABLE } from '../utils/constants';
import DBContext, { UpdateItem } from '../utils/dataContext';
export const updateRole = async (request: IUpdateUserRole) => {
  try {
    const dbContext = new DBContext()

    const params: UpdateItem = {
      TableName: USER_STABLE,
      Key: {
        PK: request.UserName,
        SK: `${request.UserType}`
      },
      UpdateExpression: "set #UserRole = :UserRole, UpdatedAt = :UpdatedAt",
      ExpressionAttributeNames: {
        "#UserRole": "UserRole",
      },
      ExpressionAttributeValues: {
        ":UserRole": request.UserRole,
        ":UpdatedAt": request.UpdatedAt,
      },
      ReturnValues: "UPDATED_NEW",
    };
    console.info(
      `Edit Brand Begins: Service Table - ${USER_STABLE}'-'${params}`
    );
    const results = await dbContext.update(params);
    return results;
  } catch (error: any) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
};
