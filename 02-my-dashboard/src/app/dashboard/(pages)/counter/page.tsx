import { Metadata } from "next";
import { Counter } from "./components";


export const metadata: Metadata = {
    title: "Counter",
    description: "Counter page",
    keywords: ["counter", "dashboard", "user"],
};


export default function CounterPage() {
    return (
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Counter Page</h1>
        <Counter />
      </div>
    );
  }