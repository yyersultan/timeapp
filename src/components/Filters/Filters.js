import { useState } from 'react';
import styles from './Filters.module.css';
import searcIcon from './search-icon.png';

export const Filters = () => {
    const[mode,setMode] = useState(0);
    return (
        <div className={styles.Filters} >
            {/* SWITCH => ACTIVE | DONE */}
            <div className={styles.Switch}> 
                <button 
                onClick={() => setMode(0)}
                className={styles.btn + ' '+(mode === 0 && styles.active)}>
                    Активные
                </button>
                <button 
                onClick={() => setMode(1)}
                className={styles.btn + ' ' + (mode === 1 && styles.active)}>
                    Завершенные
                </button>
            </div>
            {/* SEARCH */}
            <div className={styles.SearchBlock}>
                <input className={styles.SearchInput} placeholder='Поиск'/>
                <img className={styles.SearchIcon} src={searcIcon} alt=''/>
            </div>
        </div>
    )
}
