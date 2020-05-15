export async function handleResponse(response) {
    if (response.ok){
        console.log('fetch success')
        console.log(response.json);
        return response.json();}
    if (response.status === 400) {
        // So, a server-side validation error occurred.
        // Server side validation returns a string error message, so parse as text instead of json.
        const error = await response.text();
        console.log(error);
        throw new Error('404 error');
    }
    throw new Error("response failed");
}


export function handleError(error) {

    console.error("API call failed. " + error);
    throw error;
}
