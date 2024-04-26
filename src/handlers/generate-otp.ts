import { VERIFY_GENERATE_OTP_CONSTRAINTS } from "../constraints";
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import { sendSms } from "../functions/twilioSms";
import { IGenerateOtp, IOtpDetails, ISendMessageParams } from '../interfaces';
import ResponseModel from "../models/common/response";
import GenerateOTPModel from "../models/generateOtpModel";
import { GenerateOTP } from "../utils/helper";
import { wrapAsRequest } from "../utils/lambda-handler";
import { validateRequest } from "../utils/validator";

const post = async (
  body: IGenerateOtp,
): Promise<ResponseModel> => {
  try {
    await validateRequest(body, VERIFY_GENERATE_OTP_CONSTRAINTS);
    const userModel = new GenerateOTPModel(body);
    const request = userModel.toEntityMapping()

    const details = GenerateOTP();
    const otpDetails: IOtpDetails = {
      Otp: details.otp,
      ExpiresIn: details.expiresIn,
    };
    // const response = await updateOtp(request, otpDetails);
    // if (!response) {
    //   new ResponseModel("Update Otp Failed", StatusCode.ERROR, ResponseMessage.ERROR);
    // }

    const smsRequest: ISendMessageParams = {
      to: `${request.CountryCode}${request.Mobile}`,
      message: `Your Migobucks OTP is ${otpDetails.Otp}`,
    };
    const res = await sendSms(smsRequest);
    if (!res) {
      new ResponseModel("Send SMS Otp Failed", StatusCode.ERROR, ResponseMessage.ERROR);
    }
    let expiryTime = new Date();
    expiryTime.setHours(expiryTime.getHours() + 2);

    return new ResponseModel(
      otpDetails,
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