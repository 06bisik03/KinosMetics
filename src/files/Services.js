import Navbar from './Navbar';
import styles from './Services.module.css';
const Services = () => {

    return (
        <div className={styles.container}>
            <Navbar highlight="services"/>
        </div>
    )
}
export default Services;