export const POST_USER_CONSTRAINTS = {
    SiteName: "required",

}

export const RESET_PASSWORD_CONSTRAINTS = {
    UserName: "required",
    Password: "required",
    UserType: "required",
}

export const SIGN_IN_CONSTRAINTS = {
    UserName: "required",
    Password: "required",
    UserType: "required",
}

export const GET_CONSTRAINTS = {
    pageId: "required",
    siteId: "required",
}


export const VERIFY_OTP_CONSTRAINTS = {
    UserName: "required",
    UserType: "required",
    Otp: "required",
}

export const VERIFY_GENERATE_OTP_CONSTRAINTS = {
    UserName: "required",
    UserType: "required",
    CountryCode: "required",
    Mobile: "required"

}

