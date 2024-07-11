const weather = () => {

    return {
        location: prompt("Which location?"),
        param: "q",
        key: "68617bef7bd84148a1a75110241107",
        type: "current",
        url: "https://api.weatherapi.com/v1/"
    }
}

export default weather