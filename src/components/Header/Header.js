import styles from './Header.module.css'

export const Header = () => {
    const date = new Date().toISOString().slice(0,10).split('-').reverse().join('.');

    return (
        <header className={styles.Header}>
            <h1 className={styles.Header_Title}>
                Сессии за сегодня - {date} 
            </h1>
        </header>
    )
}