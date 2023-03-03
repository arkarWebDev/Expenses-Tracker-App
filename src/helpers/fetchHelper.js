export function getUserName(key) {
  return JSON.parse(localStorage.getItem(key));
}
