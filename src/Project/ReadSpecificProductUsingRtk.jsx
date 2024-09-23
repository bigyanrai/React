import { useParams } from "react-router-dom";
import { useReadProductByIdQuery } from "../Services/api/productService";

const ReadSpecificProductUsingRtk = () => {
  let params = useParams();

  let result = useReadProductByIdQuery(params.id);

  console.log(result?.data?.data);
  let product = result?.data?.data || {};

  function getYearMonthDay(dateString) {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Ensure two digits
    const day = String(date.getUTCDate()).padStart(2, "0"); // Ensure two digits

    return `${year}-${month}-${day}`; // Format to yyyy-MM-dd
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

export default ReadSpecificProductUsingRtk;
