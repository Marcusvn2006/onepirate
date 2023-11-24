import styles from "./voos.module.css";

import imgPrinc from "../../assets/penisdebode.jpg";

import spMiami from "../../assets/spMiami.svg";
import spLa from "../../assets/spLa.svg";
import spMadrid from "../../assets/spMadrid.svg";

import lisboa from "../../assets/lisboa.svg";
import rio from "../../assets/rio.svg";
import london from "../../assets/london.svg";

import { Card } from "@mui/material";
import Cards from "../../components/cards/cards";
import PlayCard from "../../components/cards/playCards/playCard";

const Voos = () => {
  return (
    <div className={styles.divMaster}>
      <div className={styles.imgPrinc}>
        <img src={imgPrinc} alt="Imagem Principal da página voos" />
      </div>
      <div className={styles.tlgdh2}>
        <h2>voos procurados por perto</h2>
      </div>
      <div className={styles.firstPart}>
        <div className={styles.spMiami}>
          <PlayCard img={spMiami} info={"02 NOV - 10 NOV - IDA DE VOLTA"}>
            São Paulo para Miami
          </PlayCard>
        </div>

        <div className={styles.spLa}>
          <PlayCard
            img={spLa}
            info={"21 NOV - 28 NOV - IDA DE VOLTA"}
            desc={""}
          >
            São Paulo para Los Angeles
          </PlayCard>
        </div>

        <div className={styles.spMadrid}>
          <PlayCard
            img={spMadrid}
            info={"14 NOV - 23 NOV - IDA DE VOLTA"}
            desc={""}
          >
            São Paulo para Madrid
          </PlayCard>
        </div>
      </div>

      {/* _________________________________________________________________________________________________________________________ */}

      <div className={styles.tlgdh2}>
        <h2>cidades em alta</h2>
        <h4>RESERVE VOOS PARA DESTINOS PROCURADOS POR VIAJANTES DO BRASIL</h4>
      </div>
      <div className={styles.firstPart}>
        <div className={styles.spLa}>
          <PlayCard
            img={rio}
            desc={"VOOS SAINDO DE  SÃO PAULO/CONGONHAS AIRPORT"}
            info={"18 nov - 25 nov -  ida e volta"}
          >
            rio de janeiro, brasil
          </PlayCard>
        </div>

        <div className={styles.spMiami}>
          <PlayCard
            img={lisboa}
            desc={"VOOS SAINDO DE  SÃO PAULO/CONGONHAS AIRPORT"}
            info={"18 nov - 25 nov -  ida e volta"}
          >
            LISBOA, PORTUGAL
          </PlayCard>
        </div>

        <div className={styles.spMadrid}>
          <PlayCard
            img={london}
            desc={"VOOS SAINDO DE  SÃO PAULO/CONGONHAS AIRPORT"}
            info={"18 nov - 25 nov -  ida e volta"}
          >
            londres, reino unido
          </PlayCard>
        </div>
      </div>
    </div>
  );
};

export default Voos;
