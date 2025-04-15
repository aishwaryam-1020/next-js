'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

//useRouter=>next/navigation
//server by default
//client component

export default function Home() {
  const router=useRouter();
  // console.log(router)
  function handleNavigate(){
    router.push("/product")
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-between p-24">
      <h1>Welcome</h1>
      <Link href={"/product"}>Navigate to product page</Link>
     <Link href={"/accounts"}>Navigate to account page</Link>
   <h2 className="font-bold mt-3 text-lg">Alternative way of navigating using useRouter</h2>
    <button className="font-bold text-lg" onClick={handleNavigate}>Navigate to products page using router</button>
    </div>
  );
}
