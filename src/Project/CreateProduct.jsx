const CreateProduct = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <br />
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" name="quantity" id="quantity" />
        </div>
        <br />
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price" />
        </div>
        <br />
        <div>
          <label htmlFor="feature">Feature:</label>
          <input type="checkbox" name="feature" id="feature" />
        </div>
        <br />
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" name="image" id="image" />
        </div>
        <br />

        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" id="image" />
        </div>
        <br />
        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" name="company" id="company" />
        </div>
        <br />
        <button>Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
