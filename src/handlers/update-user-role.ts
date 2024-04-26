import { POST_USER_CONSTRAINTS } from "../constraints";
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import ResponseModel from "../models/common/response";
import UpdateUserRoleModel, { IUpdateUserRole } from '../models/updateRole';
import { updateRole } from '../services/updateRole';
import { wrapAsRequest } from "../utils/lambda-handler";
import { validateRequest } from "../utils/validator";

const update = async (
  body: IUpdateUserRole,
): Promise<ResponseModel> => {
  try {
    await validateRequest(body, POST_USER_CONSTRAINTS);
    const userModel = new UpdateUserRoleModel(body);
    const request = userModel.toEntityMapping()
   
    const data = await updateRole(request)
    return new ResponseModel(
      data,
      StatusCode.OK,
      ResponseMessage.SUCCESS
    );
  } catch (error: any) {
    return error instanceof ResponseModel
      ? error
      : new ResponseModel(error, StatusCode.ERROR, ResponseMessage.USER_ROLE_UPDATE_ERROR);
  }
}

export const handler = wrapAsRequest(update)