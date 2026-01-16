"use client";
import ClusterMap from "@/components/ClusterMap";
import Navbar from "@/components/Navbar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import  Content  from "@/components/Content";


export default function MainDashboard() {
    return (
        <div className="flex flex-col h-screen p-3 bg-neutral-200 dark:bg-neutral-900">
            <Navbar/>   
            <ClusterMap/>
            <Content/>
        </div>
    )
}



