import Navbar from "./Navbar";
import styles from "./Products.module.css";
import { useState } from "react";
const Products = () => {

    const [amount, setAmount ] = useState(1);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.productsTitle}>
        <div className={styles.productImg}>
          <div className={styles.thumbnail}>
            <img src="/images/perfume.jpg" />
          </div>
        </div>
        <div className={styles.productDetail}>
          <div className={styles.name}>SAHJJDKSAHJKDSHAJKDHSAJKHDJKAS</div>
          <div className={styles.price}>
            <div>$199.99</div>
            <div className={styles.amount}>
              <img src="/images/minus.png"onClick={() => setAmount((prev) => prev-1)} />
              <input value={amount} min="0" max="99"/>
              <img src="/images/pluss.png" onClick={() => setAmount((prev) => prev+1)}/>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.detailTitle}></div>
            <div></div>
          </div>
          <div className={styles.btn}>dsadsadsadsa</div>
          <div className={styles.perks}>dsadsadsa</div>
        </div>
      </div>
    </div>
  );
};
export default Products;
