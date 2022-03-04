const trimString = (str: string, maxLength: number, ellipses: boolean): string => {
  if (str.length > maxLength) {
    return ellipses
      ? str.substring(0, maxLength - 3) + "..."
      : str.substring(0, maxLength);
  } else {
    return str;
  }
}

export default trimString;