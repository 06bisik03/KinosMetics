import styles from "./Home.module.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar highlight="home" />
      <div className={styles.slogan}>
        <div className={styles.sloganContent}>
          <h1 className={styles.sloganWhite}>

            <span>Redefine</span>
            <span>Beauty :</span>

            <br/>
            <span>Your</span>
            <span>Canvas</span>
            <br/>
            <span>Our</span>
            <span>Colours</span>
            <br/>
            <span>Infinite</span>
            <span>Possibilities</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
