import { Link } from 'react-router-dom'
import styles from './acumul.module.css'

const Aculmu = ({ children, img , desc, info, int}) => {
  return (
    <div>
<Link to={int}>   <div className={styles.play}>
        <div>
          <img src={img} alt="" />
        </div>
        <div className={styles.escrita}>
          <h1>{children}</h1>
          <h2>{desc}</h2>
          <h2>{info}</h2>
     
       
        </div>
      </div></Link>
    </div>
  )
}

export default Aculmu
