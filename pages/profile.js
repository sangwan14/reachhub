import {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import LoadingIcons from "react-loading-icons";


export default function Profile() {
    const [data, setData] = useState({});
    const router = useRouter();
    const {symbol} = router.query;


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    symbol: symbol
                })
            });

            const jsonResponse = await response.json();

            setData(jsonResponse);
        }

        fetchData();
    }, []);


    const companyProfileDOM = (
        <div className={"bg-[#6B71E3] w-[800px] text-white p-8 rounded-xl text-xl"}>
            <div className={"font-bold text-4xl text-center mb-4"}>Company Profile</div>
            <hr/>
            <img className={"mx-auto mt-8 h-20"} src={data.logo} />
            <div className={"mt-4"}>Name: {data.name}</div>
            <div>Market Cap: {data.marketCapitalization}</div>
            <div>Phone: {data.phone}</div>
        </div>
    )

    return (
        <div className={"p-12 flex flex-col items-center bg-white min-h-screen"}>
            {companyProfileDOM}
        </div>
    )
}