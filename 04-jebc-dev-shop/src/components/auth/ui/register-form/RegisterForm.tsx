"use client";

import { registerUser, login } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
    name: string;
    email: string;
    password: string;
};

export const RegisterForm = () => {
    const router = useRouter();
    const [showError, setshowError] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (
        data: FormInputs
    ) => {
        const { name, email, password } = data;
        const res = await registerUser(name, email, password);

        if (!res.ok) {
            setshowError(true);
            return;
        }

        setshowError(false);
        await login(email.toLocaleLowerCase(), password);
        router.replace("/profile");
    };

    return (
        <>
            <form
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="full_name">Nombre Completo</label>
                <input
                    className={clsx(
                        "px-5 py-2 border bg-gray-200 rounded mb-5 text-black",
                        {
                            "border-red-500 animate-pulse":
                                errors.name,
                        }
                    )}
                    type="text"
                    autoFocus
                    {...register("name", { required: true })}
                />

                <label htmlFor="email">Correo electrónico</label>
                <input
                    className={clsx(
                        "px-5 py-2 border bg-gray-200 rounded mb-5 text-black",
                        {
                            "border-red-500 animate-pulse":
                                errors.email,
                        }
                    )}
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    className={clsx(
                        "px-5 py-2 border bg-gray-200 rounded mb-5 text-black",
                        {
                            "border-red-500 animate-pulse":
                                errors.password,
                        }
                    )}
                    type="password"
                    {...register("password", {
                        required: true,
                        minLength: 8,
                    })}
                />
                {showError && (
                    <div className="text-red-500 mb-6 text-center font-semibold">
                        No se pudo crear el usuario. Intente más
                        tarde.
                    </div>
                )}

                <button className="btn-primary" type="submit">
                    Crear
                </button>

                {/* divisor l ine */}
                <div className="flex items-center my-5">
                    <div className="flex-1 border-t border-gray-500"></div>
                    <div className="px-2 text-gray-800">O</div>
                    <div className="flex-1 border-t border-gray-500"></div>
                </div>

                <Link
                    href="/auth/login"
                    className="btn-secondary text-center"
                >
                    Ingresar
                </Link>
            </form>
        </>
    );
};
