"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {


  const data = {
 
  navMain: [
    {
      title: "All Alumini",
      url: "#",
      icon: IconDashboard,
    },
   
  ]
}
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          asChild
          className="data-[slot=sidebar-menu-button]:!p-1.5"
        >
          <div>
            <SidebarTrigger className="-ml-1" />
            <span className="text-base font-semibold">Campus Connection</span>
          </div>
        </SidebarMenuButton>
        <SidebarMenuButton
          asChild
          className="data-[slot=sidebar-menu-button]:!p-1.5 w-fit"
        >
          <div className="w-fit">
            <AnimatedThemeToggler />
          </div>
        </SidebarMenuButton>
      </SidebarHeader>


       <SidebarContent className="">
        <NavMain items={data.navMain} />
      </SidebarContent>

    </Sidebar>
  );
}




      // <SidebarFooter>
      //   <SignedIn>
      //     <SidebarMenu>
      //       <SidebarMenuItem className="flex items-center gap-2 px-2">
      //         <UserButton />
      //         <span className="group-data-[collapsible=icon]:hidden text-sm font-medium">
      //           <UserButton showName/>
      //         </span>
      //       </SidebarMenuItem>
      //     </SidebarMenu>
      //   </SignedIn>

      //   {/* agar nahi hai tho  */}
      //   <SignedOut>
      //     <SignInButton>
      //       <a className="mr-4 cursor-pointer" href="/Login">
      //         Sign in
      //       </a>
      //     </SignInButton>
      //     <SignUpButton>
      //       <a className="mr-4 cursor-pointer" href="/Signup">
      //         Sign Up
      //       </a>
      //     </SignUpButton>
      //   </SignedOut>
      // </SidebarFooter>