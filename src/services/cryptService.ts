import Crypto from "crypto-js";

let secretKey = process.env.REACT_APP_SECRET_KEY;

class Crypt {
  encrypt(payload: any) {
    let cipher = Crypto.AES.encrypt(JSON.stringify(payload), secretKey);
    return cipher.toString();
  }

  decrypt(payload: any) {
    if (payload) {
      let decipher = Crypto.AES.decrypt(payload, secretKey);
      let plaintext = decipher.toString(Crypto.enc.Utf8);
      return JSON.parse(plaintext);
    } else {
      return null;
    }
  }
}

export default Crypt;