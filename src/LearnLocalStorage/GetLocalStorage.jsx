const GetLocalStorage = () => {
  let name = localStorage.getItem("name");
  let age = localStorage.getItem("age");

  return (
    <div>
      My name is {name}. my age is {age}
    </div>
  );
};

export default GetLocalStorage;
