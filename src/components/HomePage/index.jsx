import React from "react";
import Menu from "../Menu";
import Card from "../UI_Kits/Card";
import Category from "./Category";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Menu />
      <Card
        image="https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f"
        name="Hoodie đẹp lắm nè mọi người ơi"
      />
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
            title: "Pull",
          },
        ]}
      />
    </div>
  );
}
