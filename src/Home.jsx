const Home = (props) => {
  return (
    <>
      <div>Home</div>
      {`My name is ${props.name} and my number is ${props.number}`}
    </>
  );
};

export default Home;
