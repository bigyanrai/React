import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";
import { HitAPI } from "../Services/HitAPI";

const ProductForm = ({
  buttonName = "",
  onSubmit = () => {},
  product = "",
  isLoading = false,
}) => {
  let [name, setName] = useState(product?.name || "");
  let [quantity, setQuantity] = useState(product?.quantity || 0);
  let [price, setPrice] = useState(product?.price || 0);
  let [feature, setFeature] = useState(product?.feature || false);
  let [productImage, setProductImage] = useState(product?.productImage || "");
  let [manufactureDate, setManufactureDate] = useState(
    product?.manufactureDate || ""
  );
  let [company, setCompany] = useState(product?.company || "");

  let companies = [
    { label: "Choose a company" },
    { label: "Apple", value: "apple" },
    { label: "Dell", value: "dell" },
    { label: "Microsoft", value: "microsoft" },
    { label: "Samsung", value: "samsung" },
  ];

  // function MyDropzone() {
  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    let fileData = acceptedFiles[0];
    let data = new FormData();
    data.append("document", fileData);
    try {
      let result = await HitAPI({
        url: `/file/single`,
        method: `post`,
        data: data,
      });
      console.log(result.data.link);
      setProductImage(result.data.link);
    } catch (error) {}
  }, []);
  // }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  useEffect(() => {
    if (product) {
      setName(product?.name || "");
      setQuantity(product?.quantity || 0);
      setPrice(product?.price || 0);
      setFeature(product?.feature || false);
      setProductImage(product?.productImage || "");
      setManufactureDate(product?.manufactureDate || "");
      setCompany(product?.company || 0);
      console.log("inside useEffect", product);
    }
  }, [product]);
  //   useEffect(() => {
  //     if (product && Object.keys(product).length > 0) {
  //       setName(product.name || "");
  //       setQuantity(product.quantity || 0);
  //       setPrice(product.price || 0);
  //       setFeature(product.feature || false);
  //       setProductImage(product.productImage || "");
  //       setManufactureDate(product.manufactureDate || "");
  //       setCompany(product.company || "");
  //     }
  //   }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name,
      quantity,
      price,
      feature,
      manufactureDate,
      productImage,
      company,
    };
    // try {
    //   let result = await axios({
    //     url: `http://localhost:3000/product`,
    //     method: "post",
    //     data,
    //   });
    //   console.log(result);
    //   setName("");
    //   setQuantity(0);
    //   setPrice(0);
    //   setFeature(false);
    //   setManufactureDate("");
    //   setCompany("");
    //   setProductImage("");
    //   toast.success(result.data.message);
    // } catch (error) {}
    onSubmit(data);
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="feature">Feature:</label>
          <input
            type="checkbox"
            name="feature"
            id="feature"
            checked={feature === true}
            onChange={(e) => {
              setFeature(e.target.checked);
            }}
          />
        </div>
        <br />
        <div {...getRootProps()}>
          <label htmlFor="">Product Image:</label>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag n drop some files here, or click to select files</p>
          )}
          {productImage ? (
            <img
              src={productImage}
              alt="Product Image"
              style={{ height: "100px", width: "auto" }}
            ></img>
          ) : null}
          {/* <label htmlFor="image">Image:</label> */}
          {/* <input type="file" name="image" id="image" /> */}
        </div>
        <br />

        <div>
          <label htmlFor="date">Manufacture Date:</label>
          <input
            type="date"
            name="date"
            id="image"
            value={manufactureDate}
            onChange={(e) => {
              setManufactureDate(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="company">Company:</label>
          {/* <input type="text" name="company" id="company" /> */}
          <select
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          >
            {companies.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <button>{isLoading ? buttonName : "Creating......"}</button>
      </form>
    </div>
  );
};

export default ProductForm;
