// UTILS
import { $storage } from "../../services";

// INTERFACES
import { IUserPayload } from "../../interfaces";

// INITIAL STATE
const userInitialState: IUserPayload = {
  email: "",
  first_name: "",
  last_name: "",
  manager_uid: null,
  office_uid: "",
  phone_number_with_country_code: "",
  staff_uid: "",
  title: "",
  isLoggedIn: false
};

const getAuthUser: () => IUserPayload = () => {
  const userPayload = $storage.getFromStore("userPayload");
  if (userPayload) {
    return userPayload;
  } else {
    return userInitialState;
  }
}

export default getAuthUser();