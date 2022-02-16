import styles from './Statistics.module.css';
import group from './Group.png'
import T from '../History/tenge.png';
import team from './groupMem.png';

export const Statistics = () => {
    return (
        <div className={styles.Statistics}>
            <div className={styles.TotalMoney}>
                <img src={group} alt=''/>
                <div className={styles.TotalMoneyText}>
                    <div className={styles.Money}>56000<img src={T} alt=''/> </div>
                    <span>За сегодня</span>
                </div>
            </div>
            <div className={styles.TotalMoney}>
                <img src={team} alt=''/>
                <div className={styles.TotalMoneyText}>
                    <div className={styles.Money}>120 </div>
                    <span>Активных тренировок</span>
                </div>
            </div>
        </div>
    )
}