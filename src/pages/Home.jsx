import React from "react";
import './Home.scss';
export const Home = () => {//this line exports the component named home, the arrow is defining the home page as a function
    return (//now we are in the defn of the function, this fcn returns .jsx which is how ui elements are wrritten in react.
        //div in html is wrapper used to wrap content
        <div className="Home">
            <p>Hello, I am Mehul and <br />
            Welcome to my Portfolio!</p> {/*the home text is displayed*/}
        </div>
    );
}