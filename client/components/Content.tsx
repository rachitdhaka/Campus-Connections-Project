"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";

export default function Content() {
  const [userData, setUserData] = useState<any>(null);
  const fetchingData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1000/user/information"
      );
      setUserData(response.data);
    } catch (error) {
      setUserData({ error: "Failed to fetch data" });
    }
  };

  return (
    <div className="h-screen pt-15 p-2 w-[60%]">
      <Button onClick={fetchingData}>Fetch Data</Button>
      <div className="mt-4">
        {userData && (
          <div className="bg-gray-100 p-2 rounded text-sm overflow-x-auto max-h-100 overflow-y-auto">
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(userData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
