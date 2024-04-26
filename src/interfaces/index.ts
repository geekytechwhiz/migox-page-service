export interface IUser {
    UserName: string; 
    Password: string;
    UserType?: string; 
    Status?: string
    LastLoggedIn?: string;
}

export interface IPasswordReset {
    UserName: string;
    UserType: string;
    Password: string;
    UpdatedAt?: string;
    PasswordChangedAt: string;

}

export interface IOtpDetails {
    Otp?: number;
    ExpiresIn?: number;
}

export interface ISignInRequest {
    UserName: string;
    Password: string;
    UserType: string
    CreatedAt?: string;
    Remember?: boolean;
}
export interface SignInResponse {
    Auth: boolean;
    Token: string;
    Status: Status
    Role:string
}

 export interface IUserRole {
    UserRole: string; 
    UserName: string;
    UserType: string;  
}
export interface ISendMessageParams {
    to: string;
    message: string;
}
export enum RequestAction {
    GENERATE_OTP = 'GENERATE_OTP',
}

export interface IGenerateOtp {
    Action?: RequestAction;
    CountryCode?: string | number;
    Mobile?: string | number;
    Message?: string;
    UserName: string;
    UserType: string;
}

export interface UserDetails {
    UserName: string;
    UserType: string;
    Otp: number;
}
export interface ResponseModel {
    statusCode: number;
    payload: any;
    error: ErrorModel;
}
export interface ErrorModel {
    Code: number;
    Message: string;
}
export interface Status {
    Code: number;
    Message: string;
} 