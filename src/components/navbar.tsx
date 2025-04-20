
import styles from '@/components/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={`${styles.logo} ${styles.grow}`}>
                    <Link href="/">
                        <Image className={styles.logoDark} src="/tp-logo-dark.svg" alt="Logo" width={60} height={60} />
                        <Image className={styles.logoLight} src="/tp-logo-light.svg" alt="Logo" width={60} height={60} />
                        <div>
                            <span>TRENTON</span>
                            <span>PAUL</span>
                        </div>
                    </Link>
                </div>
                <nav className={styles.navbar}>
                    <ul className="navbar__menu">
                        <li className={styles.grow}><Link href="/">Portfolio</Link></li>
                        <li className={styles.grow}><Link href="/about">About</Link></li>
                        <li className={styles.grow}><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}