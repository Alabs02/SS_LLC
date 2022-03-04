export type IUserPayload = {
  email: string;
  name: string;
}

const initialState = () => ({
  userPayload: {email: "me@me.com", name: "me"} as IUserPayload,
});

const state = initialState();

export default state;