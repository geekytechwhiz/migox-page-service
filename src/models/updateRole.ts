import { IUserRole } from "../interfaces";

export interface IUpdateUserRole extends IUserRole{
  UpdatedAt:string
}
export default class UpdateUserRoleModel {

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
  private Mobile: string;
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
   * Getter $UserRole
   * @return {string}
   */
  public get $UserRole(): string {
    return this.UserRole;
  }

  /**
   * Setter $UserRole
   * @param {string} value
   */
  public set $UserRole(value: string) {
    this.UserRole = value;
  }
  private UserRole: string;


  /**
   * Getter $SK
   * @return {string}
   */
  public get $SK(): string {
    return this.SK;
  }

  /**
   * Setter $SK
   * @param {string} value
   */
  public set $SK(value: string) {
    this.SK = value;
  }
  private SK: string;

  private _user_name: string;
  public get user_name(): string {
    return this._user_name;
  }
  public set user_name(value: string) {
    this._user_name = value;
  }
  constructor({
    UserName,
    UserRole,
    UserType

  }: IUserRole) {

    this.UserType = UserType,
      this.user_name = UserName
    this.UserRole = UserRole
  }
  toEntityMapping(): IUpdateUserRole {
    return {
      UserName: this.user_name,
      UserRole: this.UserRole,
      UserType: this.UserType,
      UpdatedAt: new Date().toLocaleString(),
    };
  }
}
