
import { ProfileStatus, UserRole } from "../enums/profile-status.enum";
import { IUser, IOtpDetails } from "../interfaces";

export interface IUserRegistration extends IUser {
  UserId?: string;
  EmailId: string;
  UserName: string;
  UserRole: UserRole
  OtpDetails?: IOtpDetails;
  Mobile: string;
  PasswordChangedAt?: string;
  PK: string;
  SK: string;
  CreatedAt?: string;
  UpdatedAt?: string;

}
export default class UserModel {

  private _user_role: UserRole;
  public get user_role(): UserRole {
    return this._user_role;
  }
  public set user_role(value: UserRole) {
    this._user_role = value;
  }

  private _user_name: string;
  public get user_name(): string {
    return this._user_name;
  }
  public set user_name(value: string) {
    this._user_name = value;
  }
  /**
   * Getter $updatedAt
   * @return {number}
   */
  public get $updatedAt(): string {
    return this.updatedAt;
  }

  /**
   * Setter $updatedAt
   * @param {number} value
   */
  public set $updatedAt(value: string) {
    this.updatedAt = value;
  }
  private updatedAt: string;
  /**
   * Getter $Otp
   * @return {string}
   */
  public get $Otp(): IOtpDetails {
    return this.Otp;
  }

  /**
   * Setter $Otp
   * @param {IOtpDetails} value
   */
  public set $Otp(value: IOtpDetails) {
    this.Otp = value;
  }
  private Otp: IOtpDetails;
  private Mobile: string;

  /**
   * Getter $createdAt
   * @return {string}
   */
  public get $createdAt(): string {
    return this.createdAt;
  }

  /**
   * Setter $createdAt
   * @param {string} value
   */
  public set $createdAt(value: string) {
    this.createdAt = value;
  }
  private createdAt: string;
  private lastLoggedIn: string;
  private Status: string;


  /**
   * Getter $Status
   * @return {string}
   */
  public get $Status(): string {
    return this.Status;
  }

  /**
   * Setter $Status
   * @param {string} value
   */
  public set $Status(value: string) {
    this.Status = value;
  }

  /**
   * Getter $lastLoggedIn
   * @return {string}
   */
  public get $lastLoggedIn(): string {
    return this.lastLoggedIn;
  }

  /**
   * Setter $lastLoggedIn
   * @param {string} value
   */
  public set $lastLoggedIn(value: string) {
    this.lastLoggedIn = value;
  }

  /**
   * Getter $Mobile
   * @return {string}
   */
  public get $Mobile(): string {
    return this.Mobile;
  }

  /**
   * Setter $Mobile
   * @param {string} value
   */
  public set $Mobile(value: string) {
    this.Mobile = value;
  }


  /**
   * Getter $UserType
   * @return {string}
   */
  public get $UserType(): string {
    return this.UserType;
  }

  /**
   * Setter $UserType
   * @param {string} value
   */
  public set $UserType(value: string) {
    this.UserType = value;
  }
  private UserType: string;
  /**
   * Getter $UserId
   * @return {string}
   */
  public get $UserId(): string {
    return this.UserId;
  }

  /**
   * Setter $UserId
   * @param {string} value
   */
  public set $UserId(value: string) {
    this.UserId = value;
  }
  private UserId: string;

  /**
     * Getter $EmailId
     * @return {string}
     */
  public get $EmailId(): string {
    return this.EmailId;
  }

  /**
   * Setter $EmailId
   * @param {string} value
   */
  public set $EmailId(value: string) {
    this.EmailId = value;
  }
  private EmailId: string


  /**
   * Getter $Password
   * @return {string}
   */
  public get $Password(): string {
    return this.Password;
  }

  /**
   * Setter $Password
   * @param {string} value
   */
  public set $Password(value: string) {
    this.Password = value;
  }
  private Password: string;

  private _pk: string;
  public get PK(): string {
    return this._pk;
  }
  public set PK(value: string) {
    this._pk = value;
  }
  private _sk: string;
  public get SK(): string {
    return this._sk;
  }
  public set SK(value: string) {
    this._sk = value;
  }

  private _otp_details: IOtpDetails;
  public get otp_details(): IOtpDetails {
    return this._otp_details;
  }

  public set otp_details(value: IOtpDetails) {
    this._otp_details = value;
  }
  constructor({
    UserId = `U${new Date().getTime()}`,
    EmailId,
    Password,
    Status = ProfileStatus.Active,
    LastLoggedIn,
    Mobile,
    UserType,
    OtpDetails,
    UserName,
    UserRole,
    CreatedAt = new Date().toLocaleString(),
    UpdatedAt = new Date().toLocaleString(),

  }: IUserRegistration) {
    this.user_name = UserName
    this.user_role = UserRole,
      this.EmailId = EmailId,
      this.Mobile = Mobile
    this.Status = Status,
      this.otp_details = this.create(OtpDetails),
      this.EmailId = EmailId,
      this.lastLoggedIn
    this.createdAt = CreatedAt,
      this.updatedAt = UpdatedAt
    this.UserType = UserType,
      this.lastLoggedIn = LastLoggedIn,
      this.Password = Password,
      this.UserId = UserId
  }

  create(details): IOtpDetails {

    return {
      Otp: details?.Otp,
      ExpiresIn: details?.ExpiredOn
    }
  }


  toEntityMapping(): IUserRegistration {
    return {
      EmailId: this.EmailId,
      UserRole: this.user_role,
      Status: this.Status,
      Password: this.Password,
      PK: this.user_name,
      SK: this.UserType,
      UserId: this.UserId,
      CreatedAt: this.createdAt,
      UserType: this.UserType,
      LastLoggedIn: this.lastLoggedIn,
      Mobile: this.Mobile,
      OtpDetails: this.otp_details,
      UpdatedAt: this.updatedAt,
      UserName: this.user_name,
      PasswordChangedAt: null
    };
  }
}
