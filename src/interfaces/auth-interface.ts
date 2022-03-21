export interface IUserPayload {
  email: string;
  first_name: string;
  last_name: string;
  manager_uid: string | null;
  office_uid: string;
  phone_number_with_country_code: string;
  staff_uid: string;
  title: string;
  isLoggedIn: boolean;
}