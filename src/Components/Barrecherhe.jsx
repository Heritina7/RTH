import { BiSearch } from "react-icons/bi"; 

export default function Navbar() {
  
  return (
    <div className="h-72 flex justify-center items-center space-y-10 bg-slate-500 flex-col w-full">
        <div className="flex w-[40%] flex-row">
            <input type="text"className="h-14 w-full rounded-full rounded-r" />
            <button type="button" className="h-14 w-32 flex justify-center items-center rounded-full rounded-l text-white bg-black"><BiSearch className="text-4xl"/></button>
        </div>
        <h1 className="flex text-4xl text-white">
        quels produit rechercher vous aujourd'hui
        </h1>
</div>

    );
}
