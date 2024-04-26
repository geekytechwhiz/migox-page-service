import { VERIFY_OTP_CONSTRAINTS } from "../constraints";
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import { UserDetails } from '../interfaces';
import ResponseModel from "../models/common/response";
import UserDetailsModel from '../models/common/verifyOtpModel';
import { verifyOtp } from '../services/verifyOtp';
import { wrapAsRequest } from "../utils/lambda-handler";
import { validateRequest } from "../utils/validator";

const post = async (
  body: UserDetails,
): Promise<ResponseModel> => {
  try {
    await validateRequest(body, VERIFY_OTP_CONSTRAINTS);
    const userModel = new UserDetailsModel(body);
    const request = userModel.toEntityMapping()
    let response = await verifyOtp(request);
    console.info({ Message: "response", response })
    return new ResponseModel(
      response,
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