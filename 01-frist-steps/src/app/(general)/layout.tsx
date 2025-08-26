import { NavBar } from "../components/general-layout";

export default function GeneralLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>{children}</main>
            <footer>
                {/* Aquí tu footer */}
                <p>© JEBC-DeV</p>
            </footer>
        </div>
    );
}
