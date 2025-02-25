// Import React and useState for managing component state
import React, { useState } from "react";

// Import useNavigate from react-router-dom to enable navigation between pages
import { useNavigate } from "react-router-dom";

// Import the component's SCSS styles
import './NavBar.scss';

// Define an array `data` containing navigation links (Home & About)
const data = [
    {
        label: 'Home', // Text that will appear on the button
        to: '/'        // URL path for navigation
    },
    {
        label: 'Projects',
        to: '/about'
    },

    {
        label: 'Internships',
        to: '/about'
    },

    {
        label: 'Contact Me',
        to: '/about'
    }
]

// Define the NavBar functional component
const NavBar = () => {

    // State to manage the toggle icon (currently unused in this component)
    const [toggleIcon, setToggleIcon] = useState(false);

    // Function to toggle the state (currently not affecting UI)
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    // Get the navigate function from react-router-dom to programmatically change routes
    const navigate = useNavigate();

    // Function to navigate to a specific page when a button is clicked
    const handleNavingateToPage = (link) => {
        navigate(link); // Uses the `navigate` function to change the route
    }

    return (
        <nav className="navbar">  {/* Navigation wrapper with a CSS class */}
            
            {/* Button for "Home" - Clicking navigates to '/' */}
            <button onClick={() => handleNavingateToPage(data[0].to)}>
                <span className="navbar__button">
                    {data[0].label} {/* Displays "HOME" */}
                </span>
            </button>

            {/* Button for "projects" - Clicking navigates to '/about' */}
            <button onClick={() => handleNavingateToPage(data[1].to)}>
                <span className="navbar__button">
                    {data[1].label} {/* Displays "project" */}
                </span>
            </button>

             {/* Button for "internships" - Clicking navigates to '/about' */}
             <button onClick={() => handleNavingateToPage(data[1].to)}>
                <span className="navbar__button">
                    {data[2].label} {/* Displays "internship" */}
                </span>
            </button>

             {/* Button for "Contact me" - Clicking navigates to '/about' */}
             <button onClick={() => handleNavingateToPage(data[1].to)}>
                <span className="navbar__button">
                    {data[3].label} {/* Displays "contact me" */}
                </span>
            </button>
        </nav>
    )
}

// Export NavBar to be used in other components
export default NavBar;
