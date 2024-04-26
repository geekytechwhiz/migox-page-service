import bcrypt from 'bcryptjs';
import { RESET_PASSWORD_CONSTRAINTS } from "../constraints";
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import { IPasswordReset } from "../interfaces";
import ResponseModel from "../models/common/response";
import ResetPasswordModel from '../models/passwordReset';
import { updatePassword } from "../services/updatePassword";
import { wrapAsRequest } from "../utils/lambda-handler";
import { validateRequest } from "../utils/validator";

const resetPassword = async (
  body: IPasswordReset,
): Promise<ResponseModel> => {
  try {
    await validateRequest(body, RESET_PASSWORD_CONSTRAINTS);
    const userModel = new ResetPasswordModel(body);
    const request = userModel.toEntityMapping()
    request.Password = await bcrypt.hash(body.Password, 8);

    const data = await updatePassword(request)
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

export const handler = wrapAsRequest(resetPassword)