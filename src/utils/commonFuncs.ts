export const cutStr = (str: string, ln: number) => {
  return str.length > ln ? str.slice(0, ln).trim() : str;
};
