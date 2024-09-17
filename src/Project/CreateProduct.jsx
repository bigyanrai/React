import ProductForm from "./ProductForm";
import { HitAPI } from "../Services/HitAPI";

const CreateProduct = () => {
  const onsubmit = async (data) => {
    try {
      let result = await HitAPI({
        url: `/product`,
        method: "post",
        data: data,
      });
      console.log(result);
    } catch (error) {}
  };

  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onsubmit}
        // product={"}
      />
    </div>
  );
};
export default CreateProduct;
