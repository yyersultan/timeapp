import styles from './History.module.css';
import T from './tenge.png';

export const HistoryItem = ({user}) => {
    return (
        <div className={styles.HistoryItem}>
            <header className={styles.HistoryItemHeader}>
                <span>{user.address}</span>
                <span>{user.date}</span>
            </header>
            <div className={styles.HistoryItemBody}>

                <div className={styles.UserInfo}>
                    <div className={styles.UserHeader}>{user.name[0]}</div>
                    <div>
                        <div className={styles.Username}>{user.name}</div>
                        <div className={styles.UserPhone}>{user.phone}</div>
                    </div>
                </div>

                <div className={styles.UserTimeCost}>
                    <div className={styles.UserTime}>05:20</div>
                    <div className={styles.UserCost}>{user.money}<img src={T} alt=''/></div>
                </div>
            </div>
        </div>
    )
}