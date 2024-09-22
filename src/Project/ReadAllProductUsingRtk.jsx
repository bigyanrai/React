import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { HitAPI } from "../Services/HitAPI";
import {
  useDeleteProductMutation,
  useReadProductQuery,
} from "../Services/api/productService";
import { useEffect } from "react";

const ReadAllProductUsingRtk = () => {
  let {
    isError: isReadProductError,
    isSuccess: isReadProductSuccess,
    isLoading: isReadProductLoading,
    data: isReadProductData,
    error: isReadProducterror,
  } = useReadProductQuery();
  let [
    deleteProduct,

    {
      isError: isProductDeleteError,
      isSuccess: isProductDeleteSuccess,
      isLoading: isProductDeleteLoading,
      data: productDeleteData,
      error: productDeleteerror,
    },
  ] = useDeleteProductMutation();

  // console.log(productInfo?.data?.datFa);

  let products = isReadProductData?.data || [];

  useEffect(() => {
    if (isReadProductError) console.log(isReadProducterror.error);
  }, [isReadProductError, isReadProducterror]);

  let navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      let result = await HitAPI({
        url: `/product/${id}`,
        method: "delete",
      });
      console.log(result);
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
      {isReadProductLoading ? (
        "......LOADING.......LOADING........LOADING"
      ) : (
        <div>
          {products.map((value, index) => {
            return (
              <div
                key={index}
                style={{ marginTop: "10px", fontFamily: "arial" }}
              >
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
                <div>
                  Product feature is :{value.feature ? "true" : "false"}
                </div>
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
                    deleteProduct(value._id);
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
      )}
    </>
  );
};

export default ReadAllProductUsingRtk;
