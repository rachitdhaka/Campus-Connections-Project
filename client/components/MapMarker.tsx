"use client";

import { useEffect, useState, useId } from "react";
import { Map, MapPopup, MarkerLabel, useMap } from "@/components/ui/map";

// Generate random points around NYC
// function generateRandomPoints(count: number) {
//   const center = { lng: -73.98, lat: 40.75 };
//   const features = [];

//   for (let i = 0; i < count; i++) {
//     const lng = center.lng + (Math.random() - 0.5) * 0.15;
//     const lat = center.lat + (Math.random() - 0.5) * 0.1;
//     features.push({
//       type: "Feature" as const,
//       properties: {
//         id: i,
//         name: `Location ${i + 1}`,
//         category: ["Restaurant", "Cafe", "Bar", "Shop"][
//           Math.floor(Math.random() * 4)
//         ],
//       },
//       geometry: {
//         type: "Point" as const,
//         coordinates: [lng, lat],
//       },
//     });
//   }

//   return {
//     type: "FeatureCollection" as const,
//     features,
//   };
// }

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
// Convert places array to GeoJSON FeatureCollection
const pointsData = {
  type: "FeatureCollection" as const,
  features: places.map((place) => ({
    type: "Feature" as const,
    properties: {
      id: place.id,
      name: place.location,
      category: place.companies.join(", "),
    },
    geometry: {
      type: "Point" as const,
      coordinates: [place.lng, place.lat],
    },
  })),
};

interface SelectedPoint {
  id: number;
  name: string;
  category: string;
  coordinates: [number, number];
}

function MarkersLayer() {
  const { map, isLoaded } = useMap();
  const id = useId();
  const sourceId = `markers-source-${id}`;
  const layerId = `markers-layer-${id}`;
  const [selectedPoint, setSelectedPoint] = useState<SelectedPoint | null>(
    null
  );

  useEffect(() => {
    if (!map || !isLoaded) return;

    map.addSource(sourceId, {
      type: "geojson",
      data: pointsData,
    });

    map.addLayer({
      id: layerId,
      type: "circle",
      source: sourceId,
      paint: {
        "circle-radius": 6,
        "circle-color": "#3b82f6",
        "circle-stroke-width": 2,
        "circle-stroke-color": "#ffffff",
        // add more paint properties here to customize the appearance of the markers
      },
    });

    const handleClick = (
      e: maplibregl.MapMouseEvent & {
        features?: maplibregl.MapGeoJSONFeature[];
      }
    ) => {
      if (!e.features?.length) return;

      const feature = e.features[0];
      const coords = (feature.geometry as GeoJSON.Point).coordinates as [
        number,
        number
      ];

      setSelectedPoint({
        id: feature.properties?.id,
        name: feature.properties?.name,
        category: feature.properties?.category,
        coordinates: coords,
      });
    };

    const handleMouseEnter = () => {
      map.getCanvas().style.cursor = "pointer";
    };

    const handleMouseLeave = () => {
      map.getCanvas().style.cursor = "";
    };

    map.on("click", layerId, handleClick);
    map.on("mouseenter", layerId, handleMouseEnter);
    map.on("mouseleave", layerId, handleMouseLeave);

    return () => {
      map.off("click", layerId, handleClick);
      map.off("mouseenter", layerId, handleMouseEnter);
      map.off("mouseleave", layerId, handleMouseLeave);

      try {
        if (map.getLayer(layerId)) map.removeLayer(layerId);
        if (map.getSource(sourceId)) map.removeSource(sourceId);
      } catch {
        // ignore cleanup errors
      }
    };
  }, [map, isLoaded, sourceId, layerId]);

  return (
    <>
      {selectedPoint && (
        <MapPopup
          longitude={selectedPoint.coordinates[0]}
          latitude={selectedPoint.coordinates[1]}
          onClose={() => setSelectedPoint(null)}
          closeOnClick={false}
          focusAfterOpen={false}
          offset={10}
          closeButton
        >
          <div className="min-w-35">
            <p className="font-medium">{selectedPoint.name}</p>
            <div className="mt-1">
              <p className="text-xs font-semibold">Students - Companies:</p>
              <ul className="text-xs ml-2 list-disc">
                {(function () {
                  const place = places.find((p) => p.id === selectedPoint.id);
                  if (!place) return null;
                  // Pair students and companies by index, fallback to empty string if not enough companies
                  return place.students.map((student, idx) => (
                    <li key={student}>
                      {student} - {place.companies[idx] || ""}
                    </li>
                  ));
                })()}
              </ul>
            </div>
          </div>
          <MarkerLabel position="bottom">
            {(function () {
              const place = places.find((p) => p.id === selectedPoint.id);
              if (!place) return null;
              const totalPeople =
                place.students.length + place.companies.length;
              return `${totalPeople} people working here`;
            })()}
          </MarkerLabel>
        </MapPopup>
      )}
    </>
  );
}

export function LayerMarkersExample() {
  return (
    <div className="h-full w-full">
      <Map center={[78.9629, 20.5937]} zoom={4}>
        <MarkersLayer />
      </Map>
    </div>
  );
}
