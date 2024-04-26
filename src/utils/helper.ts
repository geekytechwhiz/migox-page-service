
export const responseBuilder = (data: any, status = 200, error = { code: "", message: "" }) => {
  let response = {
    statusCode: status,
    payload: data || {},
    error: { code: "", message: "" }
  };

  if (error != null) {
    response.error = error
  }
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": false,
      "Access-Control-Allow-Headers":
        "Content-Type, Custom-Header,Access-Control-Allow-Headers,x-mibapi-customerid, X-MIBAPI-CustomerID,X-MIBAPI-CustomerType,x-mibapi-customertype,x-mibapi-token,X-MIBAPI-Token,x-mibapi-source,X-MIBAPI-Source,Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, HEAD",
    },
    body: JSON.stringify(response),
  };
};

export const ValidateHeader = (_headers = {}) => {
  let errorMessages = [];
  return {
    Message: errorMessages,
    Status: true, //errorMessages.length > 0 ? false : true,
    StatusCode: 200,
  };
};

export const MakeHeaderRequest = (headers) => {
  if (!headers) return null;
  let headerRequest = {};
  headerRequest['CustomerID'] = headers['X-MIBAPI-CustomerID'];
  headerRequest['CustomerType'] = headers['X-MIBAPI-CustomerType'];
  headerRequest['Source'] = headers['X-MIBAPI-Source'];
  headerRequest['Token'] = headers['X-MIBAPI-Token'];
  headerRequest['TraceId'] = headers['X-MIBAPI-Trace-Id'];
  return headerRequest;
};


export const GenerateOTP = () => {
  const digits = "0123456789"
  let temp = ""
  for (let i = 0; i < 6; i++) {
    temp += digits[Math.floor(Math.random() * 10)];
  }
  const otp = parseInt(temp)

  var minutesToAdd = 10;
  var date = new Date();
  var expiresIn = date.getTime() + minutesToAdd * 60000;
  return {
    otp,
    expiresIn,
  };
};
