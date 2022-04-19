import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-center'>
            <h2 className='text-center mb-4'>My blogs</h2>
            <h3>Difference between authorization and authentication?</h3>
            <p>Authentication: Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.Authentication is visible to and partially changeable by the user.</p>
            <p>Authorization: Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization is not visible to or changeable by the user.</p>

            <h3> Why are you using firebase? </h3>
            <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.

                As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.</p>
            <h3>What other options do you have to implement authentication?</h3>
       
};

export default Blogs;