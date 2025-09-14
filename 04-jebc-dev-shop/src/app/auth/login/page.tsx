import { LoginForm } from "@/components";



export default function LoginPage () {
  return (
    <div className="flex flex-col">

      <h1 className={ ` text-4xl mb-5 text-center` }>Ingresar</h1>
    <LoginForm />

    </div>
  );
}