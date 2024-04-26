import { UserDetails } from '../interfaces/index';
import { getUserInfo } from './getUser';

export const verifyOtp = async (params: UserDetails) => {
  try { 
    let userInfo = await getUserInfo(params.UserName, params.UserType)
    if (!userInfo) throw new Error('User Not Found');
    if (userInfo && Array.isArray(userInfo)) {
      userInfo = userInfo[0]
    }
    const currentTime = new Date().getTime(); 
    const { OtpDetails } = userInfo
    console.info({ Message: "OtpDetails", userInfo: userInfo.OtpDetails }, OtpDetails)

    if (params.Otp !== OtpDetails?.Otp) {
      return {
        authenticated: false,
        message: 'Invalid OTP',
      };
    } else if (currentTime >= OtpDetails?.ExpiresIn) {
      return {
        authenticated: false,
        message: 'OTP expired',
      };
    } else {
      return {
        authenticated: true,
        message: 'OTP verification success',
      };
    }
  } catch (error: any) {
    return error;
  }
};
