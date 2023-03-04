// get name
export function getUserName(key) {
  return JSON.parse(localStorage.getItem(key));
}

// delete name
export const deleteUserName = ({ key }) => {
  return localStorage.removeItem(key);
};
