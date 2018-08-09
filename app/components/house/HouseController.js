import HouseService from "./HouseService.js"

let houseService = new HouseService()

function drawHouses() {
    let houses = houseService.getHouses()
    let template = ''

    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template += `
        <div class="col-3">
        <p>Bedrooms: ${house.numOfBedrooms}</p>
        <p>Bathrooms: ${house.numOfBathrooms}</p>
        <p>City: ${house.locationCity}</p>
        <p>Price: ${house.price}</p>
        <img src="${house.imgUrl}" alt="house">
        <p>Contact: ${house.contact}</p>
    </div>
        `
    }
    document.getElementById('houses').innerHTML = template
}

export default class HouseController {
    constructor() {
        drawHouses()
    }
    addHouse(triggeredEvent) {
        triggeredEvent.preventDefault();
        let formData = triggeredEvent.target
        houseService.addHouse(formData)
        formData.reset()
        drawHouses()

    }
}