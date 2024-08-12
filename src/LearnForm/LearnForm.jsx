const LearnForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Name :</label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="">Email :</label>
          <input type="email" />
        </div>
        <br />
        <div>
          <label htmlFor="">Password :</label>
          <input type="password" />
        </div>
        <br />
        <div>
          <label htmlFor="">Gender :</label>
          <input type="radio" />
        </div>
        <br />
        <div>
          <label htmlFor="">isMarried :</label>
          <input type="checkbox" />
        </div>
        <br />
        <div>
          <label htmlFor="">Phone :</label>
          <input type="number" />
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LearnForm;
