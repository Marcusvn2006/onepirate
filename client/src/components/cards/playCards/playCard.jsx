import { Rating, Typography } from "@mui/material";
import styles from "./playCard.module.css";

import React from "react";
import { Link } from "react-router-dom";

const PlayCard = ({ children, img , desc, info, int}) => {
  return (
    <>
   <Link to={int}>   <div className={styles.play}>
        <div>
          <img src={img} alt="" />
        </div>
        <div className={styles.escrita}>
          <h1>{children}</h1>
          <h2>{desc}</h2>
          <h2>{info}</h2>
     
          <Rating 
          name="simple-controlled"
     
           />
        </div>
      </div></Link>
    </>
  );
};

export default PlayCard;
