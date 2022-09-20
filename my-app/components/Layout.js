import styles from '../styles/Layout.module.css'

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>shirinnnnnnnnnnnnnnnn hi</h2>
                {children}
            </main>
        </div>
    )
}

export default Layout