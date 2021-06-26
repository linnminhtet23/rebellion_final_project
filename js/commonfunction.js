let doc = document;

/**
 * 	docGetId() function is used to get HTMLElement id
 * 	return HTMLElement
 */
export function docGetId(idName) {
  return doc.getElementById(idName);
}

/**
 * 	docCreate() function is used to create HTMLElement
 * 	return HTMLElement
 */
export function docCreate(elementName) {
  return doc.createElement(elementName);
}

/**
 *  getItemsFromLocalStorage() function is used to get item from localStorage
 *  return JSON Object
 */
export function getItemsFromLocalStorage(itemName) {
  let getData = localStorage.getItem(itemName);
  let getParsedData = JSON.parse(getData);
  return getParsedData;
}

/**
 *  this function is for set Items in local storage
 */

export function setItemsToLocalStorage(items, email, password, userName) {
  let createUserData = {
    email: email,
    password: password,
    userName: userName,
  };
  window.localStorage.setItem(items, JSON.stringify(createUserData));
}

