import ProductForm from "./ProductForm";
import { HitAPI } from "../Services/HitAPI";
import { useCreateProductMutation } from "../Services/api/productService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreateProductUsingRtk = () => {
  let navigate = useNavigate();
  let [createProduct, { isLoading, isError, isSuccess, error, data }] =
    useCreateProductMutation();
  console.log(data);
  const onsubmit = async (body) => {
    // try {
    //   let result = await HitAPI({
    //     url: `/product`,
    //     method: "post",
    //     data: data,
    //   });
    //   console.log(result);
    // } catch (error) {}

    createProduct(body);
    navigate("/products");
  };
  useEffect(() => {
    if (isError) {
      console.log(error.error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      console.log("success");
    }
  }, [isSuccess]);

  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onsubmit}
        Product=""
        isLoading={isLoading}
        // product={"}
      />
    </div>
  );
};
export default CreateProductUsingRtk;
