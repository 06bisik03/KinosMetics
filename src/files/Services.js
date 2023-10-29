import Navbar from "./Navbar";
import styles from "./Services.module.css";
const Services = () => {
  return (
    <div className={styles.container}>
      <Navbar highlight="services" />
      <div className={styles.back}>
        <div className={styles.sloganContent}>
          <h1>
            <span>SERVICES</span>
          </h1>
        </div>
      </div>
      <div className={styles.details}>

      </div>
     
    </div>
  );
};
export default Services;
