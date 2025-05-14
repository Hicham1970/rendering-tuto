import "client-only" // This is a client-only module, it will not be executed on the server side
// This file is only executed on the client side, so you can use client-side libraries and functions here.

export const clientSideFunction = () => { 
    console.log('This function is executed on the client side',
        'elle utilise window object comme localStorage',
        'elle utilise des bibliotheques de client comme react-slick', 
    );
    return "Client result"
}