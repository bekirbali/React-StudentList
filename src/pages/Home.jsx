import styles from "../styles/home.module.scss";
import { homeListItems } from "../utils/Array";

const Home = () => {
  return (
    <div className={styles.home}>
      {homeListItems.map((item) => {
        return (
          <div
            key={item.name}
            className={`${styles.card} ${styles[item.style]}`}
          >
            <div className={styles.icons}>
              {item.icon}
              <h2>{item.name}</h2>
            </div>
            <div className={styles.number}>
              <h3>
                {item.count}
                {item.symbol && <span>{item.symbol}</span>}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
