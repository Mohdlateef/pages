// import { toHaveTextContent } from "@testing-library/jest-dom/matchers";
import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar=()=>{

    return(
        <div class="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Education">Education</NavLink>

        </div>
    )
}
export default Navbar;
// {/* <a href="/">Home</a>
//             <a href="/profile">Profile</a>
//             <a href="/About">About</a>
//             <a href="/Education">Education</a> */}

// we can use this approach as well but the problem here ii
// is that when we click on any link the page will restart by default;
// this is a another way to pass anchor Links
// <Link to="/">Home</Link>
// <Link to="/profile">Profile</Link>
// <Link to="/About">About</Link>
// <Link to="/Education">Education</Link>
