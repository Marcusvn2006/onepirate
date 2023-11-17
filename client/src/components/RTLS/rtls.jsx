import { Button } from "@mui/material";
import styles from "./rtls.module.css";
import rr from "../../assets/dd.png";
import gg from "../../assets/gg.png";
import SupportIcon from "@mui/icons-material/Support";
const Rtls = () => {
  return (
    <div>
      <div className={styles.fst}>
        <div className={styles.inps}>
          <h1>Receive offers</h1>
          <h3>Taste the holidays of the everyday close to home.</h3>
          <input type="text" />
          <Button
            sx={{
              background: "#28282A",
              width: "300px",
            }}
            variant="contained"
          >
            Keep me updated
          </Button>
        </div>
        <div className={styles.mst}>
          <img className={styles.iims} src={rr} alt="" />
          <img className={styles.ii} src={gg} alt="" />
          <div></div>
        </div>
      </div>
      <div className={styles.disp}>
        <Button
          variant="contained"
          sx={{
            color: "black",
            background: "#ffff",
            width: "602px",
            height: "84px",
            border: "solid black 4px",
            color: "rgba(0, 0, 0, 0.87)",
            fontSize: "36px",
            fontFamily: "Roboto Condensed",
            fontWeight: "700",
            textTransform: "uppercase",
            lineHeight: "44.46px",
            wordWrap: " break-word",
          }}
        >
          Got any questions? Need help?
        </Button>
        <h2>We are here to help. Get in touch!</h2>
        <SupportIcon
          sx={{
            marginTop: "30px",
            marginBottom: "40px",
          }}
        />
      </div>
    </div>
  );
};

export default Rtls;
