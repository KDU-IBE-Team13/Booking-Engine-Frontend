export const fetchDemoAPI = () => {
    fetch(`${import.meta.env.VITE_AZURE_BACKEND_APP_URL}/sampleAPI`)
    .then(response => response.text())
    .then(data => console.log(data));
}