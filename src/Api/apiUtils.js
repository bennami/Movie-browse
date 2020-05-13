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
    throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
    // eslint-disable-next-line no-console
    console.error("API call failed. " + error);
    throw error;
}
