import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import ClusterMap from "@/components/ClusterMap"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"

import data from "./data.json"
import Navbar from "@/components/Navbar"
import { MyMap } from "@/components/MapMarkersNormal"
import Content from "@/components/Content"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 62)",
          "--header-height": "calc(var(--spacing) * 22)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="floating" />
      <SidebarInset>
        <ClusterMap/>
      </SidebarInset>
    </SidebarProvider>
  )
}
{/* <ClusterMap/> */}