import styles from "./maisProc.module.css";
import sp from "../../assets/SP.png";
import rj from "../../assets/RJ.png";
import flo from "../../assets/flo.png";
// import br from "../../assets/br.png";
import { Link } from "react-router-dom";
const MaisProc = () => {
  return (
    <div className={styles.cont}>

      <h1 className={styles.hr1} >destinos mais procurados</h1>
      <div className={styles.ile}>
        <Link
          to={
            "https://www.google.com/search?q=turismo+sao+paulo&rlz=1C1GCEU_pt-BRBR1043BR1044&oq=turismo+sao&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDgwMzdqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8"
          }
        >
          {" "}
          <div>
            <h1>São paulo</h1> <img className={styles.img1} src={sp} alt="" />
          </div>
        </Link>
        <Link
          to={
            "https://www.google.com/search?q=rio+de+janeiro&rlz=1C1GCEU_pt-BRBR1043BR1044&oq=RIO+DE+&gs_lcrp=EgZjaHJvbWUqFQgAEAAYQxiDARjjAhixAxiABBiKBTIVCAAQABhDGIMBGOMCGLEDGIAEGIoFMhIIARAuGEMYgwEYsQMYgAQYigUyBggCEEUYOTINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDIMCAUQABhDGIAEGIoFMgwIBhAAGEMYgAQYigUyCggHEAAYsQMYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgzMjg2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
          }
        >
          {" "}
          <div>
            {" "}
            <h1>rio de janeiro</h1>
            <img className={styles.img2} src={rj} alt="" />
          </div>
        </Link>
      </div>

      <Link
        to={
          "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEo2q8gpKEgxYPTiS8vJL8pMzDu8uSA_J7MYAKO_C3M&q=florian%C3%B3polis&rlz=1C1GCEU_pt-BRBR1043BR1044&oq=florano&gs_lcrp=EgZjaHJvbWUqDwgBEC4YChiDARixAxiABDIGCAAQRRg5Mg8IARAuGAoYgwEYsQMYgAQyBwgCEAAYgAQyCQgDEAAYChiABDIJCAQQLhgKGIAEMgkIBRAAGAoYgAQyCQgGEAAYChiABDIJCAcQLhgKGIAEMg8ICBAAGAoYgwEYsQMYgATSAQg1MDcxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
        }
      >
        {" "}
        <div className={styles.rlrr}>
          <h1>florianópolis</h1>
          <img className={styles.img3} src={flo} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default MaisProc;
