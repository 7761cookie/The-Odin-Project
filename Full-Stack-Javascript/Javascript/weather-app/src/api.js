import weather from "./weatherApi";
import display from "./display";


const api = async () => {

    const config = weather();

    try {
        const getData = await fetch(`${config.url}${config.type}.json?key=${config.key}&${config.param}=${config.location}`, { mode: 'cors' });

        alert("working...")

        if (!getData.ok) {
            throw new Error("Error: " + getData.statusText);
        }

        const data = await getData.json();

        display(data)

    } catch (err) {
        console.log("Error: " + err);
    }
}

export default api;