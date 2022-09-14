import React, { useState } from "react";
import Menu from "./MenuApi";
import { Button } from "@mui/material";

const Card = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filtterItem = (e) => {
    const updateItem = Menu.filter((currentElem) => {
      return currentElem.category === e;
    });
    setMenuData(updateItem);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "850px",
            borderRadius: "10px",
          }}
        >
          <div className="links">
            <a href="#">
              <Button onClick={() => filtterItem("breakfast")}>
                Breakfast
              </Button>
            </a>
          </div>
          <div className="links">
            <a href="#">
              <Button onClick={() => filtterItem("evening")}>Evening</Button>
            </a>
          </div>
          <div className="links">
            <a href="#">
              <Button onClick={() => filtterItem("lunch")}>Lunch</Button>
            </a>
          </div>
          <div className="links">
            <a href="#">
              <Button onClick={() => filtterItem("dinner")}>Dinner</Button>
            </a>
          </div>
          <div className="links" style={{ borderRight: "0" }}>
            <a href="#">
              <Button onClick={() => setMenuData(Menu)}>All</Button>
            </a>
          </div>
        </div>
      </div>

      {/*  */}

      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card;
