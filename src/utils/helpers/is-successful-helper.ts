const isSuccessful = (code: number) => {
  let errorCodes = [200, 201, 241];
  return errorCodes.includes(code)
    ? true
    : false;
}

const isValid = (payload: any) => {
  let data = [undefined, 'undefined', null, 'null', 'nil', ""];
  return data.includes(payload)
    ? false
    : true;
}

export {
  isValid,
  isSuccessful,
};