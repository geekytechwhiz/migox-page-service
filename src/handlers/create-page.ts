import { POST_USER_CONSTRAINTS } from "../constraints";
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import ResponseModel from "../models/common/response";
import SitePageModel, { ICreateSitePage } from '../models/siteCreate';
import { postSitePage } from '../services/sitePageService';
import { wrapAsRequest } from "../utils/lambda-handler";
import { validateRequest } from "../utils/validator";

const post = async (
  body: ICreateSitePage
): Promise<ResponseModel> => {
  try {
    await validateRequest(body, POST_USER_CONSTRAINTS);

    const sitePageModel = new SitePageModel(body);
    const request = sitePageModel.toEntityMapping()
    const userInfo = await postSitePage(request)

    return new ResponseModel(
      userInfo,
      StatusCode.OK,
      ResponseMessage.SUCCESS
    );
  } catch (error: any) {
    return error instanceof ResponseModel
      ? error
      : new ResponseModel(error, StatusCode.ERROR, ResponseMessage.GET_ITEM_ERROR);
  }
}

export const handler = wrapAsRequest(post)