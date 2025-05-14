"use client";

import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";
import { useState } from "react";

export const Navbar = () => {
    const [search, setSearch] = useState("")
    console.log('Navbar component rendered');
    return (
        <div>
            <NavLinks />
            <NavSearch />   
        </div>
    )
 }