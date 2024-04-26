import { SIGN_IN_CONSTRAINTS } from "../constraints";
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import { ISignInRequest } from "../interfaces";
import ResponseModel from "../models/common/response";
import SignInModel from "../models/signInModel";
import { signIn } from "../services/signIn";
import { wrapAsRequest } from "../utils/lambda-handler";
import { validateRequest } from "../utils/validator";

const post = async (
  body: ISignInRequest,
): Promise<ResponseModel> => {
  try {
    await validateRequest(body, SIGN_IN_CONSTRAINTS);
    const signInModel = new SignInModel(body);
    const request = signInModel.toEntityMapping()

    const data = await signIn(request)
    return new ResponseModel(
      data,
      StatusCode.OK,
      ResponseMessage.SUCCESS
    );
  } catch (error: any) {
    return error instanceof ResponseModel
      ? error
      : new ResponseModel({}, StatusCode.ERROR, ResponseMessage.GET_ITEM_ERROR);
  }
}

export const handler = wrapAsRequest(post)