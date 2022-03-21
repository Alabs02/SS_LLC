import GenerateString from "crypto-random-string";

const generateAppKey = (length, type) => {
  return GenerateString({ length, type });
};

const keyGenerator = () => {
  const key =  `${generateAppKey(15, "base64")}${generateAppKey(15, "alphanumeric")}${generateAppKey(15, "distinguishable")}`;
  const msg = "This is a secret key, copy and paste it in the .env file";

  console.table({ key, msg })
  return key;
}

keyGenerator();
