import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Pricing Page - JEBC-DeV",
  description: "This is the pricing page of our Next.js application.",
  keywords: ["Next.js", "React", "JEBC-DeV", "tutorial"],
}
export default function PricingPage() {
    return(
        <>
        <div>
            <h1>Pricing Page</h1>
            <p>This is the pricing page of our Next.js application.</p>
        </div>
        </>
    );
}