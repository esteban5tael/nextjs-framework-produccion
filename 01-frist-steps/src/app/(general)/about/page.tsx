import { Metadata } from "next";

export const metadata:Metadata = {
  title: "About Page - JEBC-DeV",
  description: "This is the about page of our Next.js application.",
  keywords: ["Next.js", "React", "JEBC-DeV", "tutorial"],
}

export default function  AboutPage () {
  return(
    <>
    <div>
        <h1>About Page</h1>
        <p>This is the about page of our Next.js application.</p>
    </div>
    </>
  );
}