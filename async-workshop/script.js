document.querySelector("#fetchDevice").addEventListener("click", fetchDevice);

async function fetchUser() {
    // get user ID from input field
    const zoneId = document.querySelector("#zoneID").value; // just for simulation
    const url = "https://virtserver.swaggerhub.com/RhiannonBronnimann/wed-v17-practice/1.0.0/devices/${deviceId}";

    // loading indicator
    document.querySelector("#status").innerText = "Loading....";

    try {
        const response = await fetch(url);

        // log the response status code to the console
        console.log("Status Code:", response.status);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);               
        }

        const data = await response.json();

        console.log("Fetched data:", data);

        // simulate filtering based on zoneId input, if needed
        const units = data.zoneStatus?.[0]?.units;

        // display the fetched data in html
        document.querySelector("#output").innerHTML = `Zone: ${zoneId || "default"} - Units: ${units}`;
        
        // show success status
        document.querySelector("#status").innerHTML = "Device data fetched successfully!";

    } catch (error) {
        console.error("Fetch error: ", error);

        // show error status in the html
        document.querySelector("#status").innerText = "Something went wrong when we tried to fetch the data.";
    }
}

 



        // // display the fetched data in html
        // document.querySelector("#output").innerText = JSON.stringify(data.zoneStatus[0].units);

        // // show success status
        // document.querySelector("#status").innerText = "Data fetched";