import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>
        Contact
        <br />
        <button
          onClick={() => {
            navigate("/about", { replace: true });
          }}
        >
          Click to contact
        </button>
      </div>
    </>
  );
};

export default Contact;
