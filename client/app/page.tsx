import Image from "next/image";
import { LayerMarkersExample } from "@/components/MapMarker";
import { MyMap } from "@/components/MapMarkersNormal";
import Content from "@/components/Content";
export default function Home() {
  return (
    <div className="flex h-screen">
      {/* <Content /> */}
      <MyMap />
    </div>
  );
}
