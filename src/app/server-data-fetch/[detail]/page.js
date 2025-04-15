async function fetchUserDetails(currentUserId) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const result = await apiResponse.json();
        console.log(result);
        return result;
    } catch (e) {
        throw new Error(e.message || "Something went wrong");
    }
}

export default async function UserDetails({ params }) {
    console.log("Serverp", params); // should log: { id: "5" }

    const userDetails = await fetchUserDetails(params.detail); // ✅ FIXED

    return (
        <div className="p-10">
            <h1>User details page: User List Page</h1>
            <p>{userDetails?.firstName} {userDetails?.lastName}</p>
            <p>{userDetails?.age}</p>
            <p>{userDetails?.email}</p>
            <p>{userDetails?.phone}</p>
            <p>{userDetails?.birthDate}</p>
        </div>
    );
}
