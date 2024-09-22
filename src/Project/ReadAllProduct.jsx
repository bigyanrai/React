import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { HitAPI } from "../Services/HitAPI";

const ReadAllProduct = () => {
  let [product, setProduct] = useState([]);
  let navigate = useNavigate();

  let getData = async () => {
    try {
      let result = await HitAPI({
        url: `/product`,
        method: `get`,
      });
      console.log(result.data.data);
      setProduct(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await HitAPI({
        url: `/product/${id}`,
        method: "delete",
      });
      console.log(result);
      getData();
    } catch (error) {}
  };
  const sweetAlert = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed === true) {
        handleDelete(_id);
      }
    });
  };

  let handleOperation = (id, operation) => {
    if (operation === "view")
      return () => {
        navigate(`/products/${id}`);
      };
    if (operation === "update")
      return () => {
        navigate(`/products/update/${id}`);
      };
  };

  return (
    <>
      <div>
        {product.map((value, index) => {
          return (
            <div key={index} style={{ marginTop: "10px", fontFamily: "arial" }}>
              <div>
                <img
                  src={value.productImage}
                  alt="image"
                  style={{ width: "150px", height: "auto" }}
                ></img>
              </div>
              <div>Product name is :{value.name}</div>
              <div>Product quantity is :{value.quantity}</div>
              <div>Product price is :{value.price}</div>
              <div>Product company is :{value.company}</div>
              <div>Product feature is :{value.feature ? "true" : "false"}</div>
              <button
                style={{ margin: "5px", cursor: "pointer" }}
                onClick={handleOperation(value._id, "delete")}
              >
                View
              </button>
              <button
                style={{ margin: "5px", cursor: "pointer" }}
                onClick={handleOperation(value._id, "update")}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  sweetAlert(value._id);
                }}
                style={{ margin: "5px", cursor: "pointer" }}
              >
                Delete
              </button>
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReadAllProduct;
