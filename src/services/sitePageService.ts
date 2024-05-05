import { SITE_PAGE_TABLE_NAME } from '../utils/constants';
import DBContext, { GetItem, PutItem, QueryItem } from '../utils/dataContext';
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

export const getPageByPath = async (pathName: string, siteName: string) => {
    try {
        const params: QueryItem = {
            TableName: SITE_PAGE_TABLE_NAME,
            KeyConditionExpression: "page_id = :page_id AND site_id = :site_id",
            ExpressionAttributeValues: {
                ":page_id": pathName,
                ":site_id": siteName
            },
        };
        const results = await dbContext.query(params);
        return results?.Items
    }
    catch (error) {
        throw new error;
    }

}

export const fetchPageDraftModal = async (pathName: string, siteName: string) => {
    try {
        const params = {
            hash: 'Page',
            hashValue: pathName,
            range: 'SiteName',
            rangeValue: siteName,
            tableName: SITE_PAGE_TABLE_NAME,
        }
        const result = await dbContext.getItem(params);
        return result
    }
    catch (error) {
        throw new error;
    }

}
