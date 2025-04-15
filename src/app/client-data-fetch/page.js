'use client';

import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetching() {
  const { data, error, isLoading } = useSWR("https://dummyjson.com/users", fetcher);

  if (isLoading) return <p className="font-extrabold text-3xl">Loading users! please wait</p>;
  if (error) return <div>Failed to load</div>;

  return (
    <div>
      <h1>Client side data fetching</h1>
      <ul>
        {data?.users?.length > 0 ? (
          data.users.map((user) => (
            <li key={user.id} className="mt-5 cursor-pointer">{user.firstName}</li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
}
