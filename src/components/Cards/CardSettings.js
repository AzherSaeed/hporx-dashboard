import React, { useState } from "react";
import { setFormData } from "../../services/Image-utils";
import { BASE_URL } from "../../services/config";
import { ADD_PRODUCT } from "../../services/urls";
import { useMutation } from "react-query";
import axios from "axios";


// components

export default function CardSettings() {
  const [productDetail, setProductDetail] = useState({
    title: "",
    description: "",
    price: "",
    productType: "",
  });
  const [productImage, setProductImage] = useState("");

  const mutation = useMutation(
    (addProduct) => {
      return axios.post(BASE_URL + ADD_PRODUCT, addProduct);
    },
    {
      onSuccess: (response) => {
        setProductImage({
          title: "",
          description: "",
          price: "",
        });
        setProductImage("");
        alert("successful added");
      
      },

      onError: (err, variables, snapshotValue) => {
        alert('some thing went wrong')
      },
    }
  );


  const inputChangeHandler = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
  };
  const productImageHandler = (e) => {
    setProductImage({
      [e.target.name]: e.target.files[0],
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const finalData = setFormData(productImage, productDetail);
    mutation.mutate(finalData);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Create Product
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={(e) => formSubmitHandler(e)}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              {/* User Information */}
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Product Name
                  </label>
                  <input
                    onChange={(e) => inputChangeHandler(e)}
                    type="text"
                    required
                    name="title"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Price
                  </label>
                  <input
                    onChange={(e) => inputChangeHandler(e)}
                    type="number"
                    required
                    min={1}
                    name="price"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Select Image
                  </label>
                  <input
                    onChange={(e) => productImageHandler(e)}
                    type="file"
                    required
                    min={1}
                    name="productImage"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Select Product Type
                  </label>
                  <select
                    required
                    name="productType"
                    className="w-full"
                    onChange={(e) => inputChangeHandler(e)}
                  >
                    <option value="">Select Product Type</option>
                    <option value="topCategory">Top Catetory</option>
                    <option value="topCategory">Top Catetory</option>
                    <option value="onlyProduct">Only Product</option>
                    <option value="onlyProduct-add">Only Product Add</option>
                    <option value="therapeautic">Therapeautic</option>
                    <option value="therapeautic-add">Therapeautic Add</option>
                    <option value="trending">Trending</option>
                    <option value="trending-add">Trending Add</option>
                    <option value="menProduct">Man's Product</option>
                    <option value="menProduct-add">Man's Product Add</option>
                    <option value="ladiesProduct">Ladies Product</option>
                    <option value="marketPlace">Marketplace</option>
                    <option value="marketPlace-add">Marketplace Add</option>
                    <option value="industry">Industry</option>
                    <option value="industry-add">Industry Add</option>
                    <option value="home">Home</option>
                    <option value="home-add">Home Add</option>
                    <option value="viewedToday">Ad Viewd</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
            {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6> */}
            {/* <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="New York"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="United States"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Postal Code"
                  />
                </div>
              </div>
            </div> */}
            {/* <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6> */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Product Description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    onChange={(e) => inputChangeHandler(e)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
