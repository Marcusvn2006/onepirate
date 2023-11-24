import styles from "./hosp.module.css";
import imghos from "../../assets/imghos.png";
import Viags from "../../components/viags/viags";
import Cards from "../../components/cards/cards";
import MaisProc from "../../components/maisProc/maisProc";
import Aculmu from "../../components/acumul/aculmu";
import ht from "../../assets/ht.png"
import apa from "../../assets/apar.png"
import res from "../../assets/resor.png"
const Hosp = () => {
  return (
    <div>
      <img className={styles.imc} src={imghos} alt="" />
      <h1 className={styles.hr1}>OFERTAS</h1>
      <div className={styles.cont}>
        <div>
          <Cards/>
        </div>
      </div>
<div className={styles.maisproc}>
<MaisProc/>
</div>
 <div className={styles.sls}> < h1> PESQUISE POR TIPOS DE ACOMODAÇÕES</h1>
<div className={styles.acu}>
  <Aculmu img={ht}>HOTÉIS</Aculmu>
  <Aculmu img={apa}>APARTAMENTOS</Aculmu>
  <Aculmu img={res}>RESORTS</Aculmu>
</div></div>
    </div>
  );
};

export default Hosp;
