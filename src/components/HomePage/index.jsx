import React from "react";
import Menu from "../Menu";
import Card from "../UI_Kits/Card";
import Category from "./Category";
import Slideshow from "./Slideshow";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Menu />
      {/* <Slideshow /> */}
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
          },
          {
            title: "Pull",
          }
        ]}
      />
      SẢN PHẨM BÁN CHẠY
      <Card
        image="https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f"
        name="Hoodie đẹp lắm nè mọi người ơi"
      />
    </div>
  );
}
