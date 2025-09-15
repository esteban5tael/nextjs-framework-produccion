import { RegisterForm } from "@/components";


export default function NewAccountPage() {
    return (
        <div className="flex flex-col">
            <h1 className={` text-4xl mb-5 text-center`}>
                Registrarse
            </h1>
            <RegisterForm />
        </div>
    );
}
