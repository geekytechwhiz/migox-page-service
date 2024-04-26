import { IGenerateOtp } from "../interfaces";

export enum RequestAction {
    GENERATE_OTP = 'GENERATE_OTP',
}
export default class GenerateOTPModel {
    private _action?: RequestAction;
    public get action(): RequestAction {
        return this._action;
    }
    public set action(value: RequestAction) {
        this._action = value;
    }
    private _country_code?: string | number;
    public get country_code(): string | number {
        return this._country_code;
    }
    public set country_code(value: string | number) {
        this._country_code = value;
    }
    private _mobile?: string | number;
    public get mobile(): string | number {
        return this._mobile;
    }
    public set mobile(value: string | number) {
        this._mobile = value;
    }
    private _message?: string;
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    private _user_name: string;
    public get user_name(): string {
        return this._user_name;
    }
    public set user_name(value: string) {
        this._user_name = value;
    }
    private _user_type: string;
    public get user_type(): string {
        return this._user_type;
    }
    public set user_type(value: string) {
        this._user_type = value;
    }

    constructor({ UserName, UserType, Action, CountryCode, Message, Mobile }: IGenerateOtp) {
        this.user_name = UserName,
            this.user_type = UserType,
            this.action = Action,
            this.country_code = CountryCode,
            this.mobile = Mobile,
            this.message = Message
    }

    toEntityMapping(): IGenerateOtp {
        return {
            UserName: this.user_name,
            UserType: this.user_type,
            Action: this.action,
            CountryCode: this.country_code,
            Message: this.message,
            Mobile: this.mobile
        }
    }
}