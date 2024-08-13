const SetLocalStorage = () => {
  //Local storage is the memory for a particualr domain in particular browser.
  //All data in local storage are string
  //if browser is closed local storage data will persist in local

  localStorage.setItem("name", "ram");
  localStorage.setItem("age", "50");
  return <div>SetLocalStorage</div>;
};

export default SetLocalStorage;
