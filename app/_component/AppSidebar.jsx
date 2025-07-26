"use client"
import React from 'react'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Compass, GalleryHorizontalEnd, Home, LogIn, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SignOutButton, SignUpButton } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'

const MenuOptions = [
    {
        title: "Home",
        icon: Search,
        path: "/"
    },
    {
        title: "Discover",
        icon: Compass,
        path: "/discover"
    },
    {
        title: "Library",
        icon: GalleryHorizontalEnd,
        path: "/library"
    },
    {
        title: "Sign In",
        icon: LogIn,
        path: "/sign-in"
    }
]

const AppSidebar = () => {
    const path = usePathname();
    const { user } = useUser();
    return (
        <Sidebar >
            <SidebarHeader className="bg-accent flex items-center py-5">
                <Image src={"/logo.png"} alt='logo' width={150} height={100} />
            </SidebarHeader>
            <SidebarContent className="bg-accent">
                <SidebarGroup >
                    <SidebarContent>
                        <SidebarMenu>
                            {MenuOptions.filter(menu => !(user && menu.title === "Sign In")).map((menu, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton
                                        asChild
                                        className={`p-5 py-5 hover:bg-transparent hover:font-medium ${path?.includes(menu.path) && "font-medium"
                                            }`}
                                    >
                                        <Link href={menu.path}>
                                            <menu.icon className="h-8 w-8" />
                                            <span className="text-lg">{menu.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                        </SidebarMenu>


                        {!user ? <SignUpButton mode='modal'>
                            <Button className="rounded-full py-5 mx-4">Sign Up</Button>
                        </SignUpButton> :
                            <SignOutButton>
                                <Button className="rounded-full py-5 mx-4">Sign Out</Button>
                            </SignOutButton>}


                    </SidebarContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter className="bg-accent  py-3">
                <div className='p-3 flex  flex-col'>
                    <h2 className='text-gray-500 '>
                        Try Pro
                    </h2>
                    <p className='text-gray-500 text-sm'>Upgrade for image upload, smarter AI & more copilot</p>
                    <Button variant={"outline"} className='mt-4 text-gray-500 mb-3'>Learn More</Button>
                    <UserButton />
                </div>
            </SidebarFooter>

        </Sidebar>
    )
}

export default AppSidebar