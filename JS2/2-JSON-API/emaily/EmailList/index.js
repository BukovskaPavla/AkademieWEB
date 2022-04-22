import { Email } from "../Email";

export const EmailList = ({ emails }) => {
  let result = "";
  for (let index = 0; index < emails.length; index++) {
    const email = emails[index];
    result += Email(email);
  }
  return result;
};