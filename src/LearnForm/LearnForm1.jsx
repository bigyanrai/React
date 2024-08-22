import { useState } from "react";

const LearnForm1 = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");
  let [age, setAge] = useState(0);
  let [country, setCountry] = useState("Nepal");
  let [gender, setGender] = useState("male");
  let [isMarried, setIsMarried] = useState(false);
  let [description, setDescription] = useState("");

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="fullName">FullName : </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={() => {
              setFullName;
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={() => {
              setEmail;
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={() => {
              setPassword;
            }}
          />
        </div>
        <div>
          <label htmlFor="address">Address : </label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={() => {
              setAddress;
            }}
          />
        </div>
        <div>
          <label htmlFor="age">Age : </label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={() => {
              setAge;
            }}
          />
        </div>
        <div>
          <label htmlFor="country">Country : </label>
          <select name="" id="country">
            <option value="Nepal">Nepal</option>
            <option value="China">China</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender">Gender : </label>
          <label htmlFor="male">Male </label>
          <input type="radio" name="gender" value={"male"} />
          <label htmlFor="female">Female </label>
          <input type="radio" name="gender" value={"female"} />
        </div>
        <div>
          <label htmlFor="isMarried">IsMarried : </label>
          <input type="checkbox" name="isMarried" id="isMarried" />
        </div>
        <div>
          <label htmlFor="description">Description : </label>
          <input
            type="textarea"
            name="description"
            id="description"
            value={description}
            onChange={() => {
              setDescription;
            }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LearnForm1;
