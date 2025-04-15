'use client';

import { usePathname, useSearchParams } from "next/navigation";

export default function Cart(){
    const pathName=usePathname();
    const searchParams=useSearchParams();
    console.log(searchParams.get('search'),searchParams.get("randomvalue"));
    console.log(pathName)
    return(
        <div>
            <h1>This is cart component</h1>
        </div>
    )
}