import React, { useEffect } from "react";

const Navbar = ({ color }) => {
    useEffect(() => {
        alert("I will appear for every render")
    })
    useEffect(() => {
        alert("I will appear at first render")
    }, [])
    useEffect(() => {
        alert("I will appear at color change")
    }, [color])

    //Example of cleanup useEffect
    useEffect(() => {

        alert("Welcome to my Navbar.jsx");
        return () => {
            alert("Nav is unmounted") //appears when nav is commeneted
        }
    }, [])


    return (
        <>
            <div>
                My color is {color}
            </div>
        </>
    )
}
export default Navbar;