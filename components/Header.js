import Link from 'next/link'

function Navigation() {
    return (
        <header>
            <ul>
                <li>
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Блог</a>
                    </Link>
                </li>

            </ul>
        </header>
    );
}

export default Navigation;