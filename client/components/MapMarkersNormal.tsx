"use client";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
  MapControls,
} from "@/components/ui/map";
import Content from "./Content";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const places = [
  {
    id: 1,
    location: "Jaipur",
    students: ["Manu Paaji", "sarah", "david", "emma", "lucas"],
    companies: [
      "Aceternity",
      "Google",
      "InnovateLabs",
      "StartupHub",
      "DevSolutions",
    ],
    lng: 75.8267,
    lat: 26.9239,
  },
  {
    id: 1,
    location: "Kolathur",
    students: ["Manu Paaji", "sarah", "david", "emma", "lucas"],
    companies: [
      "Aceternity",
      "Google",
      "InnovateLabs",
      "StartupHub",
      "DevSolutions",
    ],
    lng: 80.2046,
    lat: 13.1241,
  },
  
  {
    id: 2,
    location: "Bangalore",
    students: ["james", "sophia"],
    companies: ["FinTech Inc", "DataSystems"],
    lng: 77.5926,
    lat: 12.9716,
  },
  {
    id: 3,
    location: "Mumbai",
    students: ["arjun", "priya", "rohan"],
    companies: ["Microsoft", "Amazon", "Flipkart"],
    lng: 72.8777,
    lat: 19.076,
  },
  {
    id: 4,
    location: "Delhi",
    students: ["neha", "amit", "sanjay", "kavya"],
    companies: ["Paytm", "Zomato", "Swiggy", "Adobe"],
    lng: 77.1025,
    lat: 28.7041,
  },
  {
    id: 5,
    location: "Hyderabad",
    students: ["vikram", "anjali", "karthik"],
    companies: ["TCS", "Infosys", "Deloitte"],
    lng: 78.4867,
    lat: 17.385,
  },
  {
    id: 6,
    location: "Pune",
    students: ["shreya", "aditya"],
    companies: ["Cognizant", "Wipro"],
    lng: 73.8567,
    lat: 18.5204,
  },
  {
    id: 7,
    location: "Chennai",
    students: ["rahul", "divya", "suresh", "meera"],
    companies: ["Zoho", "Freshworks", "Oracle", "Accenture"],
    lng: 80.2707,
    lat: 13.0827,
  },
];

export function MyMap() {
  const { isSignedIn, user} = useUser();
  useEffect(() => {
    if (isSignedIn) {
      console.log("User is signed in:", user);
    } else {
      console.log("User is not signed in.");
    }
  }, [isSignedIn, user]);

  
  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      

      <Map center={[78.4867, 20.5937]} zoom={4}>
        <MapControls
          position="bottom-right"
          showZoom
          showCompass
          showLocate
          showFullscreen
        />
        {places.map((place) => (
          <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
            <MarkerContent>
              <div className="size-5 rounded-full bg-sky-500 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
              <MarkerLabel position="bottom">{place.location}</MarkerLabel>
              <MarkerLabel
                position="top"
                className="text-lg bg-neutral-200 dark:bg-neutral-950 dark:text-white size-6 rounded-full flex items-center justify-center"
              >
                {place.students.length}
              </MarkerLabel>
            </MarkerContent>
            <MarkerPopup className="p-0 w-62">
              <div className="space-y-2 p-3">
                <div>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {place.location}
                  </h3>
                </div>
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="font-medium">Students & Companies:</span>
                    <div className="text-muted-foreground space-y-0.5 mt-1">
                      {place.students.map((student, index) => (
                        <div key={index}>
                          {student} - {place.companies[index]}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
