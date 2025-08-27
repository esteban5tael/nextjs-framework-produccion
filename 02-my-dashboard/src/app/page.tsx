import { redirect } from "next/navigation";


export default function Home() {
    redirect("/dashboard");
    return (
        <>
            <div>
                <h1>Hello, Next.js!</h1>
            </div>
        </>
    );
}
