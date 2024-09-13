import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SpecificProduct = () => {
  let [product, setProduct] = useState({});

  let params = useParams();
  const getData = async () => {
    try {
      //   console.log(params.id);
      let result = await axios({
        url: `http://localhost:3000/product/${params.id}`,
        method: `GET`,
      });
      setProduct(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  function getYearMonthDay(dateString) {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1; // Months are zero-indexed, so add 1
    const day = date.getUTCDate();

    return `${year}/${month}/${day}`;
  }
  return (
    <div>
      <div>
        <div>
          <img
            src={product.productImage}
            alt="image"
            style={{ width: "150px", height: "auto" }}
          ></img>
        </div>
        <div>Product Name is :{product.productName}</div>
        <div>Product Quantity is :{product.quantity}</div>
        <div>Product Price is :{product.price}</div>
        <div>Product company is :{product.company}</div>
        <div>Product feature is :{product.feature ? "true" : "false"}</div>
        <div>
          Product Manufacture date is :
          {getYearMonthDay(product.manufactureDate)}
        </div>
      </div>
    </div>
  );
};

export default SpecificProduct;
