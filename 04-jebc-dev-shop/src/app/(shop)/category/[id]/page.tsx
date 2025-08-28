import { CategoryEnum } from "@/enums";
import { notFound } from "next/navigation";


interface Props{
  params:{
    id:string
  }
}


export default function CategoryPage({params}:Props) {
  const {id} = params;
  if(!Object.values(CategoryEnum).includes(id as CategoryEnum))notFound();
  return (
    <div>
      <h1>Category Page {id} </h1>
    </div>
  );
}