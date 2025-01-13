import React from "react";
import EventComponents from "@/components/Eventcomp"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Events() {
    return (
        <div>
            <Navbar/>
            <EventComponents/>
            <Footer/>
        </div>
    );
}