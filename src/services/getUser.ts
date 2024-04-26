import { USER_STABLE } from '../utils/constants';
import DBContext, { QueryItem } from '../utils/dataContext';
const dbContext = new DBContext();

export const getUserInfo = async (userName: string, userType: string) => {
    try {
        const params: QueryItem = {
            TableName: USER_STABLE,
            KeyConditionExpression: "PK = :PK AND SK = :SK",
            ExpressionAttributeValues: {
                ":PK": userName,
                ":SK": userType
            },
        };
        const results = await dbContext.query(params);
        return results?.Items
    }
    catch (error) {
        return error;
    }

}
