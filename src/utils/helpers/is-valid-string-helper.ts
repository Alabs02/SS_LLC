const isValidStr = (str: string | undefined) => {
  return (str !== undefined && str !== null && str !== "" && str.length > 0)
    ? true
    : false;
}

export { isValidStr as default };