import { memo} from 'react';
import styles from './History.module.css';
import { HistoryItem } from './HistoryItem';

export const History = memo(({users}) => {
   

    return (
        <div className={styles.History}>
            {users.length ? users.map(user => (
                <HistoryItem key={user.id} user={user}/>
            ))
            : <div>Нет таких пользователей</div>
            }
        </div>
    )
})