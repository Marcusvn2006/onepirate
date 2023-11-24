import { Link } from "react-router-dom";

import "../App.css";
// import { cartState } from "../atoms/cart";
import toti from "../assets/iimgtot.png";
import Introdutorio from "../components/introdutorio/Introdutorio";
import Infos from "../components/infos/infos";
import TextInfo from "../components/textInfo/TextInfo";
import Rtls from "../components/RTLS/rtls";

const Home = () => {
  return (
    <>
      <div className="divMaster">
        <br />
        <br />
        <div className="firstImg">
          <img
            src={toti}
            alt="Imagens dos espaços disponibilizados para hospedes"
          />
        </div>
        <div className="ajustesImg">
          <h1>Atualize seus domingos</h1>

          <h3>
            Desfrute de ofertas secretas com até -70% de desconto nos melhores
            hotéis de luxo todos os domingos.{" "}
          </h3>
        </div>
        <Introdutorio></Introdutorio>
      </div>
      <div className="conteineres">
        <h1 className="hmnq">Para todos os gostos e todos os desejos</h1>
        <Infos />
      </div>
      <TextInfo/>
<div className="con">
<Rtls/>
</div>
    </>
  );
};

export default Home;
