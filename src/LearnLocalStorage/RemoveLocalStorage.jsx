const RemoveLocalStorage = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("age");
  return <div>RemoveLocalStorage</div>;
};

export default RemoveLocalStorage;
