export const fetchDemoAPI = () => {
    fetch(`https://team13-ibe-backend-appservice-kdu24.azurewebsites.net/sampleAPI`)
    .then(response => response.text())
    .then(data => console.log(data));
}