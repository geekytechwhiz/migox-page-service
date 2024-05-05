import { ResponseMessage } from "../../enums/response-message.enum";
import { StatusCode } from "../../enums/status-code.enum";
import ResponseModel from "../../models/common/response";
import { getPageByPath } from "../../services/sitePageService";
import { PathParams, wrapAsRequest } from "../../utils/lambda-handler";

const getSitePage  = async (
  _body: never,
  pathParams: PathParams,
): Promise<ResponseModel> => {
  try {
    console.log("pathParams", pathParams)
    const { pageId, siteId } = pathParams;
    const request = { pageId, siteId}
    // await validateRequest(request, GET_CONSTRAINTS);
    const data = await getPageByPath(pageId, siteId) 


    return new ResponseModel(
      data && data[0],
      StatusCode.OK,
      ResponseMessage.SUCCESS
    );
  } catch (error: any) {
    console.log("error", error)
    return error instanceof ResponseModel
      ? error
      : new ResponseModel(error, StatusCode.ERROR, ResponseMessage.GET_ITEM_ERROR);
  }
}

export const handler = wrapAsRequest(getSitePage)