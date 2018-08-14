import HouseService from "./HouseService.js"

let houseService = new HouseService()

function drawHouses(houses) {
   // let houses = houseService.getHouses()
    let template = ''

    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template += `
        <div id="house-ad" class="col-3">
        <p>Bedrooms: ${house.bedrooms}</p>
        <p>Bathrooms: ${house.bathrooms}</p>
        <p>Levels: ${house.levels}</p>
        <p>Price: ${house.price}</p>
        <p>Year: ${house.year}</p>
        <img src="${house.imgUrl}" alt="house">
        <p>Description: ${house.description}</p>
    </div>
        `
    }
    document.getElementById('houses').innerHTML = template
}

export default class HouseController {
    constructor() {
        houseService.getHouses(drawHouses)
    }
    addHouse(e) {
        e.preventDefault();
        let formData = e.target
        houseService.addHouse(formData,drawHouses)
        formData.reset()
        drawHouses()

    }
}