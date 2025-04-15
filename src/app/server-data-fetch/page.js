import Link from "next/link";
async function fetchListOfUsers(){
try{
      const apiResponse=await fetch('https://dummyjson.com/users',{cache:"no-store"})
      
      const result=await apiResponse.json()
      return result.users
     }
catch(error){
    throw new Error(error)
}
}
export default async function ServerSideDataFetching(){
    const listOfusers=await fetchListOfUsers()
    // console.log(listOfusers)
    return(
        <div>
            <h1>Server side data fetching</h1>
            <ul>{listOfusers && listOfusers.length>0?listOfusers.map((user)=>
                <li key={user.id} className="mt-5 cursor-pointer"><Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link></li>):null}</ul>
        </div>
    )
}