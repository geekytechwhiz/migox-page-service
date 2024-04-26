
export type Status = {
  Code: string;
  Message: string;
}
export type ResponseType = {
  statusCode: number;
  payload: any;
  error: Error;
}

export type Users = {
  UserName: "Email" |"Mobile",
  Mobile?:string;
  Email?:string;
  UserRole: "Admin"|"User"|"Customer"|"Buddy";
  Password?: string;
  Otp: number;
  UserType: string;
}

export interface UserRole {
  UserRole: "Admin"|"User"|"Customer"|"Buddy";
  UserName: string;
  UserType: string;  
}

export type OtpDetails = {
  Otp?: string;
  ExpiresIn?: number;
}

export type SignInRequest = {
  UserName: string;
  Password: string;
  UserType: UserType
  Remember?: boolean;
}
export type SignInResponse = {
  Auth: boolean;
  Token: string;
  Status: Status
}

export type IPasswordReset = {
  UserName: string;
  UserType: UserType;
  Password: string;
  Status?: string
  UpdatedAt?: string;
}


export type IPasswordResetResponse = {
  Password: string;
  UpdatedAt?: string;
}


export type CreateStudentResponse = {
  Name: string;
  ID: string;
}

export enum RequestAction {
  GENERATE_OTP = 'GENERATE_OTP',
}

export enum UserType {
  Brand = 'Brand',
  Buddy = 'Buddy',
  Customer = 'Customer',
}

export type OtpRequest = {
  Action?: RequestAction;
  CountryCode?: string | number;
  Mobile?: string | number;
  Message?: string;
  UserName: string;
  UserType: UserType;
}

export type VerifyOtpRequest = {
  UserName: string;
  UserType: UserType;
  Otp: number;
}