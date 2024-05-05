
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
  UserName: "Email" | "Mobile",
  Mobile?: string;
  Email?: string;
  UserRole: "Admin" | "User" | "Customer" | "Buddy";
  Password?: string;
  Otp: number;
  UserType: string;
}

export interface UserRole {
  UserRole: "Admin" | "User" | "Customer" | "Buddy";
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

export interface IPage {
  Page: string;
  SiteName: string;
  Title: string;
  ParentPageURL: string;
  CurrentPageURL: string;
  DevelopedBy: string;
  DevelopedDate: string;
  IsEdit: boolean;
  SeoEnable: boolean;
  AnalyticsEnable: boolean;
  RobotTxt: boolean;
  SiteMap: boolean;
  Children: any;
  Analytics: string;
  Others: string;
  StructureData: string[];
  PageSettings: IPageSettings;
  Page_LastModificationDate: string;
  Page_LastModifiedBy: string;
}


export interface IPageSettings {
  PageCaching: boolean;
  PageName: string;
  IsScheduleUnpublish: boolean;
  SeoKeywords: string[];
  Page_State: string;
  IsSchedulePublish: boolean;
  SeoBlockIndexing: boolean;
  PageTags: string[];
}

export interface IPageResponseModel extends IPage {
  WorkflowId: string;
  WorkflowStatus: string;
  IsWorkflowEnabled: boolean;
  TaskStatus: string;
  UserName: string;
  UserId: string;
}
