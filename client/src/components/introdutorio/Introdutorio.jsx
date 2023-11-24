import styles from "./introdutorio.module.css";

import Piscina from "@mui/icons-material/BeachAccessOutlined";
// import Coin from "@mui/icons-material/LocalAtmOutlined";
import pirata from "../../assets/pirata.svg";
import cadeira from "../../assets/cadeira.svg";
import coin from "../../assets/coin.svg";
import linha from "../../assets/linha.png"

const Introdutorio = () => {
  return (
    <div className={styles.divMaster}>
     <div> <img className={styles.lala} src={linha} alt="" /></div>
      <div className={styles.info}>
        <div className={styles.hoteisLuxo}>
        <img src={cadeira} alt="" />


          <h1>Os melhores  hotéis <br /> de luxo</h1>
          <p>
            Da última moda 
            hotel boutique para o icônico <br />
            palácio com piscina XXL, <br />
            vá para um 
            mini-férias apenas alguns <br />
            Paragem de metro sua casa.
          </p>
        </div>

        <div className={styles.novasExp}>
          <img src={pirata} alt="" />

          <h1>Novas experiências</h1>
          <p>
            Privatizar uma piscina, tomar um <br />
            Banho japonês ou despertar em <br />
            900m2 de jardim... teu <br />
            Os domingos não serão iguais.
          </p>
        </div>


        <div className={styles.tarifasExclusivas}>
        <img src={coin} alt="" />
          

          <h1>tarifas esclusivas</h1>
          <p>
            Ao se cadastrar, você acessará <br />
            tarifas especialmente negociadas <br />
            que você não vai encontrar <br />
            em qualquer outro lugar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introdutorio;
