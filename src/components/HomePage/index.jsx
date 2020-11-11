import React from "react";

import Menu from "../Menu";
import Category from "./Category";
import Slideshow from "./Slideshow";
import ListCard from "./ListCard";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Menu />
      <Slideshow />
      <Category
        categoryArray={[
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            title: "Hoodie",
          },
          {
            title: "Pull",
          },
          {
            title: "Pull",
          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            title: "Hoodie",
          },
          {
            title: "Pull",
          }
        ]}
      />
      NEW ARRIVALS <br />
      CÁC MẪU MỚI VỀ - CHẤT HƠN NƯỚC CẤT
      <ListCard 
        listProducts={[
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "18.000₫"
          },
          {
            name: "Pull",
            price: "30.000₫"
          },
          {
            name: "Pull",
            price: "40.000₫"

          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "150.000₫"

          },
          {
            name: "Pull",
            price: "70.000₫"

          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "18.000₫"
          },
          {
            name: "Pull",
            price: "30.000₫"
          },
          {
            name: "Pull",
            price: "40.000₫"

          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "150.000₫"

          },
          {
            name: "Pull",
            price: "70.000₫"

          }
        ]}  
      />
      SẢN PHẨM BÁN CHẠY
      <ListCard 
        listProducts={[
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "18.000₫"
          },
          {
            name: "Pull",
            price: "30.000₫"
          },
          {
            name: "Pull",
            price: "40.000₫"

          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "150.000₫"

          },
          {
            name: "Pull",
            price: "70.000₫"

          }
        ]}  
      />
    </div>
  );
}
