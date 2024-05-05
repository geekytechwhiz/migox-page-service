
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import ResponseModel from "../models/common/response";
import { getUserInfo } from "../services/getUser";
import { PathParams, wrapAsRequest } from "../utils/lambda-handler";
import { validateRequest } from "../utils/validator";

const get = async (
  _body: never,
  pathParams: PathParams,
): Promise<ResponseModel> => {
  try {
    console.log("pathParams", pathParams)
    const { userName, userType } = pathParams;
    const request = { UserName: userName, UserType: userType }
    const data = await getUserInfo(userName, userType)


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

export const handler = wrapAsRequest(get)