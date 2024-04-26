import { SITE_PAGE_TABLE_NAME } from '../utils/constants';
import DBContext, { PutItem } from '../utils/dataContext';
const dbContext = new DBContext();

export const postSitePage = async (request) => {
    try {
        const params: PutItem = {
            TableName: SITE_PAGE_TABLE_NAME,
            Item: request,
            ReturnValues: "ALL_OLD",
            ConditionExpression: 'attribute_not_exists(page_id) AND attribute_not_exists(site_id)'
        };
        const results = await dbContext.create(params);
        if (results)
            return request
    }
    catch (error) {
        return error;
    }
}
