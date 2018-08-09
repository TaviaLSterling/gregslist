import House from '../../models/House.js'

let houses = []

export default class HouseService {
  constructor() {

  }

  getHouses() {
    let housesCopy = []

    //same as below
    // for (let i = 0; i < cars.length; i++) {
    //   const car = cars[i];

    // }

    // this is just saying for each 'car'
    //  in the whole cars array do whatever is in the code block 
    houses.forEach(house => {
      housesCopy.push(new House(
        house.numOfBedrooms,
        house.numOfBathrooms,
        house.locationCity,
        house.price,
        house.imgUrl,
        house.contact
      ))
    })
    return housesCopy
  }

  addHouse(formData) {
    let newHouse = new House(
      formData.numOfBedrooms.value,
      formData.numOfBathrooms.value,
      formData.locationCity.value,
      formData.price.value,
      formData.imgUrl.value,
      formData.contact.value
    )
    houses.push(newHouse)
    console.log(houses)

  }
}
