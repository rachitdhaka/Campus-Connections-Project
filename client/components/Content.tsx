"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import pfp from "../public/Muisc.png";
export default function Content() {
  const [userData, setUserData] = useState<any>(null);
  const fetchingData = async () => {
    try {
      const response = await axios.get("http://localhost:1000/user/dashboard");
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      setUserData({ error: "Failed to fetch data" });
    }
  };

  return (
    <div className="h-[90vh] overflow-auto absolute top-15 left-4 z-10 bg-transparent backdrop-blur-md border-b p-2 flex  flex-col  gap-2 w-sm ">
      <Button onClick={fetchingData} className="w-fit">
        Fetch Data
      </Button>
      <div>
        <h1>Global Network - Campus Connections </h1>
        <h2>Over 1000+ Students</h2>
      </div>

      {/* Render user cards if userData is an array */}
      {Array.isArray(userData) ? (
        <div className="space-y-6">
          {userData.map((user: any) => (
            <div
              key={user._id}
              className="bg-white flex flex-col gap-2 h-fit w-full p-2 rounded-lg shadow-md border-2"
            >
              {/* Profile Picture and Name */}
              <div className="flex gap-4 items-center ">
                <div className="size-8 rounded-full overflow-hidden">
                  <img src={pfp.src} alt="" />
                </div>
                <div className="">
                  <h1 className="text-sm font-bold ">{user.name}</h1>
                  <h2 className="text-sm">{user.course || "Student"}</h2>
                </div>
              </div>

              {/* Other Information */}
              <div className="flex gap-2">

                <div className="text-xs bg-neutral-200 w-fit px-2 py-1 flex justify-center items-center rounded-2xl text-neutral-500 ">
                  {user.workingLocation || "-"}
                </div>
                <div className="text-xs bg-neutral-200 w-fit px-2 py-1 flex justify-center items-center rounded-2xl text-neutral-500 ">
                  {user.batch || "-"}
                </div>
              

              
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 h-fit w-full mt-10 p-4 rounded-lg shadow-md border-2">
          {/* Profile Picture and Name */}
          <div className="flex gap-4 items-center ">
            <div className="size-10 rounded-full overflow-hidden">
              <img src={pfp.src} alt="" />
            </div>
            <div className="p-2">
              <h1 className="text-xl font-bold ">Rachit Dhaka</h1>
              <h2>SWE @ Google</h2>
            </div>
          </div>

          {/* Other Information */}
          <div>
            <p>
              <strong>Working Location:</strong> Mountain View, CA
            </p>
            <p>
              <strong>Contact :</strong> 9176647509
            </p>
            <p>
              <strong>Batch:</strong> 2026
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

