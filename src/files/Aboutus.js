import Navbar from "./Navbar";
import styles from "./Aboutus.module.css";
import fontStyles from './Services.module.css'
const Aboutus = () => {
    return (
        <div className={styles.container}>
          <Navbar highlight="aboutus" />
          <div className={styles.back}>
            <div className={fontStyles.sloganContent}>
              <h1>
                <span>About</span>
                <span>Us</span>
              </h1>
            </div>
          </div>
          <div className={styles.details}>
                
          </div>
         
        </div>
      );
}
export default Aboutus;