import Navbar from "./Navbar";
import styles from "./FlashSales.module.css";
import fontStyles from './Services.module.css'
const FlashSales = () => {
    return (
        <div className={styles.container}>
          <Navbar highlight="flashsale" />
          <div className={styles.back}>
            <div className={fontStyles.sloganContent}>
              <h1>
                <span>Flash</span>
                <span>Sales</span>
              </h1>
            </div>
          </div>
          <div className={styles.details}>
    
          </div>
         
        </div>
      );
}
export default FlashSales;