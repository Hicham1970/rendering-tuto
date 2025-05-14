import React from 'react';
import { serverSideFunction } from '@/utils/server-utils';
import { ImageSlider } from '@/components/imageSlider';
// import { clientSideFunction } from '@/utils/client-utils';

function ServerRoutePage() {
    const result = serverSideFunction(); // This function is executed on the server side
    console.log(result); // This will log the result of the server-side function to the server console in this terminal window
    // using a client-side function here will not work, because this file is executed on the server side
    // const clientResult = clientSideFunction(); // This function is executed on the client side
    return (
        <>
            <h1>Server Route {result} </h1>
            <ImageSlider />;
        </>
    )
}

export default ServerRoutePage
