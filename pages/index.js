import Image from "next/image";
import { Inter } from "next/font/google";
import {useEffect, useState} from "react";
import SearchBar from "@/components/SearchBar";
import LoadingIcons from 'react-loading-icons'
import {useRouter} from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData(){
      const response =  await fetch("/api/allsymbols", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const jsonResponse = await response.json();

      setData(jsonResponse);
      setLoading(false);
    }

    fetchData();
  }, []);

  const filteredResults = data.filter(company => JSON.stringify(company).toLowerCase().includes(value.toLowerCase()));

  const resultDOM = filteredResults.map(item => {
   return (
       <div className={"text-white p-4 rounded-xl bg-[#6B71E3] flex flex-col m-8 w-96"}>
         <div><span className={"font-bold"}>Description: </span>{item.description}</div>
         <div><span className={"font-bold"}>Symbol: </span>{item.symbol}</div>
         <div><span className={"font-bold"}>Currency: </span>{item.currency}</div>
         <button className={"rounded-xl mt-5 p-1.5 bg-white text-[#6B71E3]"} onClick={() => router.push(`/profile?symbol=${item.symbol}`)}>
           More Info...
         </button>
       </div>
   )
  });

  return (
    <main
      className={`bg-white flex min-h-screen flex-col items-center p-12 ${inter.className}`}
    >
      <SearchBar value={value} setValue={setValue}></SearchBar>
      {loading? <LoadingIcons.Oval className={"mt-20"} opacity={1} stroke="#6B71E3" /> : <div className={"mt-12"}>{resultDOM}</div>}
    </main>
  );
}
