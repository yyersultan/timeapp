import { memo } from 'react';
import styles from './Header.module.css'

export const Header = memo(() => {
    const date = new Date().toISOString().slice(0,10).split('-').reverse().join('.');

    return (
        <div className={styles.Header}>
            <div className={styles.Header_Title}>
                Сессии за сегодня - {date} 
            </div>
        </div>
    )
})