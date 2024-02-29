import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.warn(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);
    try {
      const response = await fetch("http://localhost:5000/add-product", {
        method: "post",
        body: JSON.stringify({ name, price, category, userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.warn(result);
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="product">
      <h1 className="product1">Add Product</h1>
      <input
        type="text"
        name=""
        placeholder="Enter product name"
        className="input-box"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span
          style={{
            color: "red",
            marginLeft: 24,
            fontSize: 14,
          }}
        >
          Enter valid name
        </span>
      )}
      <input
        type="text"
        name=""
        placeholder="Enter product price"
        className="input-box"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && (
        <span
          style={{
            color: "red",
            marginLeft: 24,
            fontSize: 14,
          }}
        >
          Enter valid price
        </span>
      )}
      <input
        type="text"
        name=""
        placeholder="Enter product category"
        className="input-box"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error && !category && (
        <span
          style={{
            color: "red",
            marginLeft: 24,
            fontSize: 14,
          }}
        >
          Enter valid category
        </span>
      )}
      <input
        type="text"
        name=""
        placeholder="Enter product company"
        className="input-box"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      {error && !company && (
        <span
          style={{
            color: "red",
            marginLeft: 24,
            fontSize: 14,
          }}
        >
          Enter valid company
        </span>
      )}
      <button onClick={addProduct} className="signup-button">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
