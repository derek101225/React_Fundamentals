import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className='main'>
        <div className='mainDiv'>
            <h1>Wecome to React Fundamentals at eleven fifty</h1>

            <p>
                This app is intended to a be a starter/tutorial app for your upcoming project and a learing sandbox for you in months and years to come shoud you continue to develop software with React. In this application we will work through some of the basic concepts, build out some small applications, and then unleash you to build your own applications.
            </p>
            <hr />
            <ul>
                <li>
                    Being component based, you can move on to the next module.
                    </li>
                <li>
                    The Styling is intentionally bland in some spots. Just a sandbox.
                    </li>
                <li>
                    At this phase, this site is not yet responsive.
                </li>
                <li>
                    Refactor the text on this page and make this your own portfolio project
                </li>
                <li>
                    this app simplly scratches the surface on what is possible with React.
                </li>
                <li>
                    we have tried to collect the very best resources for this app, and we have cited those <Link to="/resources">here</Link>
                </li>
                <li>
                    {/* <Link to="/resources">React Resources</Link> */}
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Home;