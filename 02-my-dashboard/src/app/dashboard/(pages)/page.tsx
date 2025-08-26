import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Dashboard",
    description: "User dashboard page",
    keywords: ["dashboard", "user", "profile"],
};

export default function DashboardPage() {
    return (
        <>
            <h1>Dashboard</h1>
        </>
    );
}
