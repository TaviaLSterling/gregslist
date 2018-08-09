import House from "../../models/House.js"

let houses = []

export default class HouseService {
    constructor() {

    }
getHouses() {
    let housesCopy = []
}

houses.forEach(house => {
    housesCopy.push(new House(
    house.numOfBedrooms,
    house.numOfBathrooms,
    house.locationCity,
    house.price
    house.imgUrl
    ))
})
return housesCopy
}}
addHouse(formData) {
    let newHouse = new House(
        formData.numOfBedrooms
        formData.numOfBathrooms
        formData.locationCity
        formData.price
        formData.imgUrl
    )
    houses.push(newHouse)
}
