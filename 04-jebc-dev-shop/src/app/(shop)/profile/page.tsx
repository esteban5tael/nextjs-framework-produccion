import { auth } from "@/auth.config";
import { Title } from "@/components";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Perfil de usuario - Jebc Dev Shop",
    description:
        "Gestiona tu información personal, actualiza tus datos y preferencias en tu perfil de usuario.",
};
export default async function ProfilePage() {
    const session = await auth();

    if (!session?.user)
        return redirect("/auth/login?callbackUrl=/profile");

    const user = session?.user;
    return (
        <>
            <div>
                <Title
                    
                    title="Perfil de usuario"
                    subtitle="Gestiona tu información personal"
                    className="mb-2"
                />
                <div className="m-10 p-5 border-2 border-gray-300 rounded-md shadow-black/10 shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Información Personal
                    </h2>

                    <div className="flex flex-col items-center w-full mb-6">
                        <Image
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-300 shadow-md"
                            src={
                                user.image ||
                                "/imgs/profile.jpg"
                            }
                            alt="Foto de perfil"
                            width={128}
                            height={128}
                        />
                    </div>

                    <p className="mb-2">
                        <span className="font-semibold">Nombre:</span>{" "}
                        {user.name}
                    </p>

                    <p className="mb-2">
                        <span className="font-semibold">Email:</span>{" "}
                        {user.email}
                    </p>

                    <p className="mb-2">
                        <span className="font-semibold">Email Verificado:</span>{" "}
                        {user.emailVerified ? "Sí" : "No"}
                    </p>

                    <p className="mb-2">
                        <span className="font-semibold">Creado el:</span>{" "}
                        {new Date(user.createdAt).toLocaleDateString()}
                    </p>

                    <p className="mb-2">
                        <span className="font-semibold">Última Actualización:</span>{" "}
                        {user.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : "N/A"}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Role:</span>{" "}
                        {user.role}
                    </p>
                </div>
            </div>
        </>
    );
}
