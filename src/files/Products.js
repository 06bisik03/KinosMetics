import Navbar from "./Navbar";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { eyeliner, lipstick, nailPolish, perfume } from "./productList";
const Products = () => {
    const {type} = useParams();
  const [amount, setAmount] = useState(1);
  const [item, setItem] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    switch(type) {
        case "nailpolishes":
            setItem(nailPolish);
            setTotalPrice(nailPolish.prod_price);
            break;
        case "lipstick":
            setItem(lipstick);
            setTotalPrice(lipstick.prod_price);
            break;
        case "eyeliners":
            setItem(eyeliner);
            setTotalPrice(eyeliner.prod_price);
            break;
        case "perfume":
            setItem(perfume);
            setTotalPrice(parseInt(perfume.prod_price));
            break;
        default: 
            break;
    }
  },[])
  const changeTotal = (type) =>{
    if(type === "plus") {
        setAmount((prev) => prev+1);
    } else {
        if(amount > 1) {
            setAmount((prev) => prev-1);  
        }
    }
    const newPrice = (item.prod_price * amount).toFixed(2);
    setTotalPrice(newPrice);
  }
  if(item) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.productsTitle}>
        <div className={styles.productImg}>
          <div className={styles.thumbnail}>
            <img src={item.prod_img}/>
          </div>
        </div>
        <div className={styles.productDetail}>
          <div className={styles.name}>{item.prod_name}</div>
          <div className={styles.price}>
            <div>${totalPrice}</div>
            <div className={styles.amount}>
              <img
                src="/images/minus.png"
                onClick={() => changeTotal("minus")}
              />
              <input value={amount} min="0" max="99" />
              <img
                src="/images/pluss.png"
                onClick={() => changeTotal("plus")}
              />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.detailProduct}>
              <div className={styles.dtp}>
                <div>Product Origin:</div>
                <div>{item.prod_origin}</div>
              </div>
              <div className={styles.dtp}>
                <div>Materials: </div>
                <div>{item.prod_mat}</div>
              </div>
              <div className={styles.dtp}>
                <div>Volume/Weight:</div>
                <div>{item.prod_size}</div>
              </div>
              <div className={styles.dtp}>
                <div>Gender:</div>
                <div>{item.prod_gender}</div>
              </div>
              <div className={styles.dtp}>
                <div>Aroma Type:</div>
                <div>{item.prod_aroma}</div>
              </div>
              <div className={styles.dtp}>
                <div>Publication Year:</div>
                <div>{item.prod_publication}</div>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <button className={styles.btnBuy}>
              Buy Product
              <svg className={styles.svgIcon} viewBox="0 0 576 512">
                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
              </svg>
            </button>
          </div>
          <div className={styles.perks}>
            <div className={styles.perksContent}>
              <div className={styles.perk}>
                <div>
                    <img src="/images/fastcargo.png"/>
                </div>
                <div>Fast and Reliable Shipping</div>
              </div>
              <div className={styles.perk}>
                <div>
                    <img src="/images/cargis.png"/>
                </div>
                <div>Free Shipping Tresholds</div>
              </div>
              <div className={styles.perk}>
                <div>
                <img src="/images/international.png"/>
                </div>
                <div>International Shipping </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
};
export default Products;
