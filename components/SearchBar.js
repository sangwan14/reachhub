import React from 'react';

export default function SearchBar({value, setValue}){
    function handleChange(e){
        setValue(e.target.value);
    }
    return (
        <div className={"flex gap-4 items-center"}>
            <div className="text-black w-80 mx-auto flex items-center gap-2 border-[#6B71E3] rounded-xl border-2 p-2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className={"grow rounded focus:outline-none"} placeholder={"Search by company name/symbol..."} value={value} onChange={handleChange}/>
            </div>
        </div>

    );
}