import { ISignInRequest } from '../interfaces/index';

export default class SignInModel {


  /**
   * Getter $Remember
   * @return {boolean}
   */
  public get $Remember(): boolean {
    return this.Remember;
  }

  /**
   * Setter $Remember
   * @param {boolean} value
   */
  public set $Remember(value: boolean) {
    this.Remember = value;
  }
  private Remember: boolean;
  private UserName: string;
  private Password: string;

  /**
   * Getter $EmailId
   * @return {string}
   */
  public get $UserName(): string {
    return this.UserName;
  }

  /**
   * Setter $EmailId
   * @param {string} value
   */
  public set $UserName(value: string) {
    this.UserName = value;
  }

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

  private _user_type: string;
  public get user_type(): string {
    return this._user_type;
  }
  public set user_type(value: string) {
    this._user_type = value;
  }

  constructor({
    UserName,
    Password,
    Remember,
    UserType
  }: ISignInRequest) {

    this.UserName = UserName,
      this.Remember = Remember,
      this.Password = Password,
      this._user_type = UserType
  }
  toEntityMapping(): ISignInRequest {
    return {
      UserName: this.UserName,
      Password: this.Password,
      UserType: this.user_type, 
      Remember: this.Remember,
    };
  }
}
