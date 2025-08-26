import { Metadata } from "next";

export const metadata: Metadata = {
    title: " Contact Page - JEBC-DeV",
    description:
        "This is the contact page of our Next.js application.",
    keywords: ["Next.js", "React", "JEBC-DeV", "tutorial"],
};
export default function ContactPage() {
    return (
        <>
            <div>
                <h1>Contact Page</h1>
                <p>
                    This is the contact page of our Next.js
                    application.
                </p>
            </div>
        </>
    );
}
