import { useEffect, useState } from 'react';
import styles from './History.module.css';
import { HistoryItem } from './HistoryItem';

export const History = () => {
    const[users,setUsers] = useState([]);
    useEffect(() => {
        fetch('./db.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);
    return (
        <div className={styles.History}>
            {users.map(user => (
                <HistoryItem key={user.id} user={user}/>
            ))}
        </div>
    )
}