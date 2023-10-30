import Navbar from "./Navbar";
import styles from "./FlashSales.module.css";
import fontStyles from "./Services.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
        <div className={styles.swiperCont}>
          <div className={styles.swiper}>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              style={{"--swiper-pagination-color": "pink",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-inactive-color": "rgba(255, 255, 255, 0.889)"
             }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className={styles.mySwiper}>
              {flashSales.map((item,index) => {
                return (
                  <a href={item.item_link} rel="noreferrer" target="_blank">
                      <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.imgCont}>
                      <img src={item.item_img} />
                    </div>
                    <div className={styles.itemDetails}>
                      <div>{item.item_name}</div>
                      <div>
                      {item.item_brand}
                      </div>
                    </div>

                    <div>{item.item_price}</div>
                  </SwiperSlide>
                  </a>
                
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlashSales;
const flashSales = [
  {
    item_name: "On your collar - Aufpolsternder Lipgloss",
    item_link:
      "https://www.sephora.de/p/on-your-collar---aufpolsternder-lipgloss-P10047905.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwb106bd08/images/hi-res/all/SKU/653631_swatch.jpg",
    item_price: "$19.99",
    item_brand: "SEPHORA",
  },
  {
    item_name: "Glossed Lip Gloss",
    item_link:
      "https://www.sephora.de/p/glossed-lip-gloss-P4028084.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw3819cd44/images/hi-res/all/SKU/479736_swatch.jpg",
    item_price: "$29.99",
    item_brand: "SEPHORA",
  },
  {
    item_name: "N°1 DE CHANEL REVITALISIERENDE FOUNDATION",
    item_link:
      "https://www.sephora.de/p/n%C2%B01-de-chanel-revitalisierende-foundation---verleiht-leuchtkraft---schuetzt-581951.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwca0b9e6b/images/hi-res/all/SKU/581951_swatch.jpg",
    item_price: "$59.99",
    item_brand: "CHANEL",
  },
  {
    item_name: "Dior Vernis Nagellack mit Gel-Effekt 23",
    item_link:
      "https://www.sephora.de/p/dior-vernis-nagellack-mit-gel-effekt-und-couture-farbe-P10052775.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw6fa03a3b/images/hi-res/all/SKU/694259_swatch.jpg",
    item_price: "$39.99",
    item_brand: "DIOR",
  },
  {
    item_name: "On your collar - Aufpolsternder Lipgloss",
    item_link:
      "https://www.sephora.de/p/on-your-collar---aufpolsternder-lipgloss-P10047905.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwb106bd08/images/hi-res/all/SKU/653631_swatch.jpg",
    item_price: "$19.99",
    item_brand: "SEPHORA",
  },
  {
    item_name: "Glossed Lip Gloss",
    item_link:
      "https://www.sephora.de/p/glossed-lip-gloss-P4028084.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw3819cd44/images/hi-res/all/SKU/479736_swatch.jpg",
    item_price: "$29.99",
    item_brand: "SEPHORA",
  },
  {
    item_name: "N°1 DE CHANEL REVITALISIERENDE FOUNDATION",
    item_link:
      "https://www.sephora.de/p/n%C2%B01-de-chanel-revitalisierende-foundation---verleiht-leuchtkraft---schuetzt-581951.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwca0b9e6b/images/hi-res/all/SKU/581951_swatch.jpg",
    item_price: "$59.99",
    item_brand: "CHANEL",
  },
  {
    item_name: "Dior Vernis Nagellack mit Gel-Effekt 23",
    item_link:
      "https://www.sephora.de/p/dior-vernis-nagellack-mit-gel-effekt-und-couture-farbe-P10052775.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw6fa03a3b/images/hi-res/all/SKU/694259_swatch.jpg",
    item_price: "$39.99",
    item_brand: "DIOR",
  },
  {
    item_name: "On your collar - Aufpolsternder Lipgloss",
    item_link:
      "https://www.sephora.de/p/on-your-collar---aufpolsternder-lipgloss-P10047905.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwb106bd08/images/hi-res/all/SKU/653631_swatch.jpg",
    item_price: "$19.99",
    item_brand: "SEPHORA",
  },
  {
    item_name: "Glossed Lip Gloss",
    item_link:
      "https://www.sephora.de/p/glossed-lip-gloss-P4028084.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw3819cd44/images/hi-res/all/SKU/479736_swatch.jpg",
    item_price: "$29.99",
    item_brand: "SEPHORA",
  },
  {
    item_name: "N°1 DE CHANEL REVITALISIERENDE FOUNDATION",
    item_link:
      "https://www.sephora.de/p/n%C2%B01-de-chanel-revitalisierende-foundation---verleiht-leuchtkraft---schuetzt-581951.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwca0b9e6b/images/hi-res/all/SKU/581951_swatch.jpg",
    item_price: "$59.99",
    item_brand: "CHANEL",
  },
  {
    item_name: "Dior Vernis Nagellack mit Gel-Effekt 23",
    item_link:
      "https://www.sephora.de/p/dior-vernis-nagellack-mit-gel-effekt-und-couture-farbe-P10052775.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw6fa03a3b/images/hi-res/all/SKU/694259_swatch.jpg",
    item_price: "$39.99",
    item_brand: "DIOR",
  },
  {
    item_name: "On your collar - Aufpolsternder Lipgloss",
    item_link:
      "https://www.sephora.de/p/on-your-collar---aufpolsternder-lipgloss-P10047905.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwb106bd08/images/hi-res/all/SKU/653631_swatch.jpg",
    item_price: "$19.99",
    item_brand: "SEPHORA",
  },
  {
    item_name: "Glossed Lip Gloss",
    item_link:
      "https://www.sephora.de/p/glossed-lip-gloss-P4028084.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw3819cd44/images/hi-res/all/SKU/479736_swatch.jpg",
    item_price: "$29.99",
    item_brand: "SEPHORA",
  },
  {
    item_name: "N°1 DE CHANEL REVITALISIERENDE FOUNDATION",
    item_link:
      "https://www.sephora.de/p/n%C2%B01-de-chanel-revitalisierende-foundation---verleiht-leuchtkraft---schuetzt-581951.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwca0b9e6b/images/hi-res/all/SKU/581951_swatch.jpg",
    item_price: "$59.99",
    item_brand: "CHANEL",
  },
  {
    item_name: "Dior Vernis Nagellack mit Gel-Effekt 23",
    item_link:
      "https://www.sephora.de/p/dior-vernis-nagellack-mit-gel-effekt-und-couture-farbe-P10052775.html",
    item_img:
      "https://www.sephora.de/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw6fa03a3b/images/hi-res/all/SKU/694259_swatch.jpg",
    item_price: "$39.99",
    item_brand: "DIOR",
  },
  
];
