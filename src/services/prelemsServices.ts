import { PRELEMS_TABLE_NAME } from '../utils/constants';
import DBContext, { PutItem, QueryItem, UpdateItem } from '../utils/dataContext';
const dbContext = new DBContext();

export const postPrelem = async (request) => {
    try {
        const params: PutItem = {
            TableName: PRELEMS_TABLE_NAME,
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

export const updatePrelems = async (prelemId: string, updatedContent: any) => {
    try {
        const params: UpdateItem = {
            TableName: PRELEMS_TABLE_NAME,
            Key: {
                PrelemId: prelemId,
            },
            UpdateExpression: 'SET Content = :content',
            ExpressionAttributeValues: {
                ':content': updatedContent,
            },
            ReturnValues: 'ALL_NEW',
        };
        const result = await dbContext.update(params);
        return result.Attributes;
    } catch (error) {
        throw error;
    }
}

export const searchPrelems = async (layout: string, tag: string[]) => {
    try {
        const params: QueryItem = {
            TableName: PRELEMS_TABLE_NAME,
            FilterExpression: 'contains(Tags, :tag) AND contains(Layout, :layout)',
            ExpressionAttributeValues: {
                ':tag': tag,
                ':layout': layout,
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
            tableName: PRELEMS_TABLE_NAME,
        }
        const result = await dbContext.getItem(params);
        return result
    }
    catch (error) {
        throw new error;
    }

}
