import "server-only";
// This file is only executed on the server side, so you can use server-side libraries and functions here. 
export const serverSideFunction = () => {
    console.log(
        'use multiple libraries',
        'use environement variables',
        'interact with a database',
        'process confidential informations'
    );
    return "Server result"
}
 