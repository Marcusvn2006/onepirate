import styles from "./textInfo.module.css";

import { Button, styled } from '@mui/material'

import martelinho from "../../assets/martelinho.svg";
import etiquetaPreco from "../../assets/etiquetapreco.svg";
import altoFalante from "../../assets/altofalante.svg";

const TextInfo = () => {

  const BtnStyled = styled(Button)({
    color: "#000",
    fontSize: "20px",
    fontWeight:"bold",
    fontFamily: "Roboto Condensed,sans-serif",
    background:"#c29af1",

  })
  return (
    <div className={styles.divMaster}>
        <div className={styles.infoAcima}>
        <h1>Como funciona:</h1>
        <button></button>

       
        </div>
      <div className={styles.info}>
        <div className={styles.martelinho}>
          <img src={martelinho} alt="" />

          <h2>
            Consulta todas as <br /> quartas-feiras às 9h.
          </h2>
        </div>

        <div className={styles.altoFalante}>
          <img src={altoFalante} alt="" />

          <h2>
            Novas ofertas todas as semanas. Novas <br />
            surpresas e experiências. <br />
            Seus domingos não vão ser mais o mesmo!
          </h2>
        </div>

        <div className={styles.etiquetaPreco}>
          <img src={etiquetaPreco} alt="" />

          <h2>
            Quem antes nasce antes pasce. <br /> Nossas 
            as ofertas são limitadas <br />
            Então, seja rápido!
          </h2>
        </div>
      </div>
      <div className={styles.btn}>
      <BtnStyled 
      variant="contained"
      color= {(theme.vars || theme).palette[ownerState.color].dark}

      > Começar </BtnStyled>
      
      </div>
    </div>
  );
};

export default TextInfo;
