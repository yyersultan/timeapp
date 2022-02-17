import styles from './Filters.module.css';
import searcIcon from './search-icon.png';

export const Filters = ({search,setSearch,mode,setMode}) => {
    
    const onSearchChange = (e) => setSearch(e.target.value);
    return (
        <div className={styles.Filters} >
            {/* SWITCH => ACTIVE | DONE */}
            <div className={styles.Switch}> 
                <button 
                onClick={() => setMode('active')}
                className={styles.btn + ' '+(mode === 'active' && styles.active)}>
                    Активные
                </button>
                <button 
                onClick={() => setMode('done')}
                className={styles.btn + ' ' + (mode === 'done' && styles.active)}>
                    Завершенные
                </button>
            </div>
            {/* SEARCH */}
            <div className={styles.SearchBlock}>
                <input 
                    value={search}
                    onChange={onSearchChange}
                    className={styles.SearchInput} 
                    placeholder='Поиск'/>
                <img className={styles.SearchIcon} src={searcIcon} alt=''/>
            </div>
        </div>
    )
}
