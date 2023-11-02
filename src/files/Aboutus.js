import Navbar from "./Navbar";
import styles from "./Aboutus.module.css";
import fontStyles from "./Services.module.css";
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
        <div className={styles.detail}>
          <div className={styles.detailImg}>
            <img alt="x"src="/images/us2.jpg" />
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>
              Unlocking Your Power With Unlimited Products
            </div>
            <div className={styles.detailDesc}>
              At KinosMetics, we believe in the transformative and empowering
              magic of makeup. We're here to help you unlock your "Unlimited
              Makeup Power" by providing an extensive range of high-quality
              products, expert guidance, and inspiration. Our team of makeup
              enthusiasts and professionals is dedicated to sharing the secrets
              of makeup artistry with you, so you can confidently express your
              unique beauty.
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Our Passion for Beauty</div>
            <div className={styles.detailDesc}>
              At KinosMetics, we are driven by an unwavering passion for all
              things beauty. Our journey began with a deep love for makeup,
              skincare, and self-expression. We've made it our mission to curate
              the finest beauty products, share expert tips, and empower you to
              look and feel your best every day. Join us in celebrating the art
              of makeup and the beauty in each individual.
            </div>
          </div>
          <div className={styles.detailImg}>
            <img alt="x"src="/images/make.jpg" />
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.detailImg}>
            <img alt="x"src="/images/cont.jpeg" />
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>
              The Faces Behind KinosMetics
            </div>
            <div className={styles.detailDesc}>
              Kinosmetics is more than just a makeup brand; it's a community of
              beauty enthusiasts and experts. Meet the faces behind our brand
              who have dedicated themselves to curating top-notch products,
              creating informative content, and assisting you on your beauty
              journey. Get to know our team, their stories, and why they're
              passionate about helping you shine.
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Our Passion for Beauty</div>
            <div className={styles.detailDesc}>
              At KinosMetics, we're committed to elevating your beauty
              experience. We understand that makeup is more than just products;
              it's a form of self-expression and empowerment. Our mission is to
              provide you with high-quality makeup, skincare, and beauty
              knowledge to enhance your self-confidence and unique style.
              Discover how we can be your trusted beauty partner on your path to
              self-discovery.
            </div>
          </div>
          <div className={styles.detailImg}>
            <img alt="x"src="/images/making.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
