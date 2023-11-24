import { Button } from "@mui/material";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Log = () => {
  return (
    <div>
      <div className={styles.toti}>
        <h1 className={styles.sig}>Sign In</h1>
      <Link to={"/up"}>  <h3>Already have an account?</h3></Link> 
       
          <div className={styles.senss}>
          <h2>Email</h2>
            <input className={styles.int} type="text" name="" id="" />
          </div>
          <div>
          <h2>Password</h2>
            <input  className={styles.int} type="text" name="" id="" />
          </div>
          <div className={styles.but}>
       <Button sx={
        {
          background:"#28282a",
    width:" 385px",
height:"45px"
        }
       }   variant="contained">Sign Up</Button>
          </div>
         <Link to={"/up"}> <h3>Forgot password?</h3></Link>
      </div>
    </div>
  );
};

export default Log;
