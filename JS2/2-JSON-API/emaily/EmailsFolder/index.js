import {EmailList} from "../EmailList";

export const EmailsFolder = ({ folderTitle, emails }) => {
  let result = `
  <div class="inbox">
    <h2>${folderTitle}</h2>
  </div>
  `;
  result += EmailList({ emails });
  return result;
};