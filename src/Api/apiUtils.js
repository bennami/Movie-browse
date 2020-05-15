export async function handleResponse(response) {
    if (response.ok){
        console.log('fetch success')
        return response.json();}
    if (response.status === 400) {
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
