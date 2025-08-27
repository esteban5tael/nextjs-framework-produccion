import Link from "next/link";
import { IoCafeOutline } from "react-icons/io5";
interface Props{
    title:string;
    subtitle:string;
    description:string;
    icon?:React.ReactNode;
    href:string;

}
export const SimpleWidget = ({title,subtitle,description,icon,href}:Props) => {
    return (
        <div className="bg-gray-800 shadow-xl p-3 sm:min-w-[25%] min-w-full rounded-2xl border border-gray-700 m-2">
            <div className="flex flex-col">
                <div>
                    <h2 className="font-bold text-gray-100 text-center">
                        {title}
                    </h2>
                </div>
                <div className="my-3">
                    <div className="flex flex-row items-center justify-center space-x-1 ">
                        <div id="icon" className="text-blue-400">
                            {
                                icon ?? <IoCafeOutline size={40} />
                            }
                        </div>
                        <div id="temp" className="text-center">
                            <h4 className="text-4xl text-gray-100">
                                {subtitle}
                            </h4>
                            <p className="text-xs text-gray-400">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full place-items-end text-right border-t-2 border-gray-700 mt-2">
                    <Link
                        href={href}
                        className="text-blue-500 hover:text-blue-400 text-xs font-medium transition-colors"
                    >
                        Más
                    </Link>
                </div>
            </div>
        </div>
    );
};
