import React from 'react'
import Hero from "./Hero";
import Navigation from "./Navigation";
import Objectives from "./Objectives";
import AreasOfVirtualLab from "./AreasOfVirtualLab";
export default function Home() {
    return (
        <div>
            <Navigation />
            <Hero />
            <Objectives />
            <AreasOfVirtualLab />
        </div>
    )
}
