import { Metadata } from "next";
/*  */


/*  */
import {  WidgetsGrid } from "../components";


export const metadata: Metadata = {
    title: "Dashboard",
    description: "User dashboard page",
    keywords: ["dashboard", "user", "profile"],
};

export default function DashboardPage() {
    
    return (
        <>
            <div>
                <div className="text-center">
                    <h1 className="text-2xl  m-4">Dashboard</h1>

                    <span>General Information</span>
                </div>

                <WidgetsGrid />
            </div>
        </>
    );
}
