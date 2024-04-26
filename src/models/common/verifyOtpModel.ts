import { UserDetails } from "../../interfaces";

export default class UserDetailsModel {
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
    private _otp: number;
    public get otp(): number {
        return this._otp;
    }
    public set otp(value: number) {
        this._otp = value;
    }

    constructor({ Otp, UserName, UserType }: UserDetails) {
        this.otp = Otp,
            this.user_name = UserName,
            this.user_type = UserType

    }
    toEntityMapping(): UserDetails {
        return {
            Otp: this.otp,
            UserName: this.user_name,
            UserType: this.user_type
        }
    }

}