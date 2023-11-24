import { Link } from "react-router-dom";
import styles from "./cards.module.css";
import PlayCards from "./playCards/playCard";
import gh from "../../assets/rtt.png";
import mau from "../../assets/manau.png";
import sp from "../../assets/SP.png";
const Cards = () => {
  return (
    <div>
      <div className={styles.cont}>
        {/* <div className={styles.cole}> */}
          <PlayCards
            int={
              "https://www.google.com/search?q=campinas&rlz=1C1GCEU_pt-BRBR1043BR1044&oq=campinas&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyDQgBEC4YgwEYsQMYgAQyEAgCEC4YrwEYxwEYsQMYgAQyCggDEC4YsQMYgAQyDQgEEAAYgwEYsQMYgAQyCggFEC4YsQMYgAQyBwgGEC4YgAQyCggHEAAYsQMYgAQyBwgIEAAYgAQyDQgJEC4YrwEYxwEYgATSAQgyNTE0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
            }
            desc="brasil"
            info="5 Ofertas"
            img={gh}
          >
            CAMPINAS
          </PlayCards>
          <PlayCards
            int={
              "https://www.google.com/search?q=Manaus&rlz=1C1GCEU_pt-BRBR1043BR1044&oq=Manaus&gs_lcrp=EgZjaHJvbWUyFwgAEEUYORhDGIMBGOMCGLEDGIAEGIoFMhIIARAuGEMYgwEYsQMYgAQYigUyEAgCEAAYgwEYsQMYgAQYigUyDAgDEAAYQxiABBiKBTIMCAQQABhDGIAEGIoFMgwIBRAAGEMYgAQYigUyDAgGEAAYQxiABBiKBTIHCAcQABiABDINCAgQLhjUAhixAxiABDIKCAkQABixAxiABNIBCDEwMjJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
            }
            desc="brasil"
            info="5 Ofertas"
            img={mau}
          >
            MANAUS
          </PlayCards>
          <PlayCards
            int={
              "https://www.google.com/search?q=sao+paulo+viagem&sca_esv=584875080&rlz=1C1GCEU_pt-BRBR1043BR1044&tbm=isch&sxsrf=AM9HkKkRUV8y6v1rNV2i4Ur5TxFeX04s8A:1700757110186&source=lnms&sa=X&sqi=2&ved=2ahUKEwiZ_pr7xdqCAxU6r5UCHexKAe4Q_AUoAnoECAIQBA&biw=1536&bih=730&dpr=1.25"
            }
            desc="brasil"
            info="5 Ofertas"
            img={sp}
          >
            SÃO PAULO
          </PlayCards>
        </div>{" "}
      </div>
    // </div>
  );
};

export default Cards;
