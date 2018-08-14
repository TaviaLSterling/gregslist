import House from '../../models/House.js'

let houses = []

const housesApi = axios.create({
  baseURL:"https://bcw-gregslist.herokuapp.com/api/houses",
  timeout:3000
})




export default class HouseService {
  constructor() {

  }

  getHouses(draw) {
    housesApi.get()
    .then(res => {
    let houses = res.data.data.map(rawHouse=> {
      return new House(rawHouse)
    })
    draw(houses)
    })
  }





    //same as below
    // for (let i = 0; i < cars.length; i++) {
    //   const car = cars[i];

    // }

    // this is just saying for each 'car'
    //  in the whole cars array do whatever is in the code block 
    //houses.forEach(house => {
      //housesCopy.push(new House(
        //house.numOfBedrooms,
        //house.numOfBathrooms,
        //house.locationCity,
       // house.price,
       // house.imgUrl,
       // house.contact
     // ))
    
    //return housesCopy
  

  addHouse(formData, draw) {
    let newHouse = new House({
      bedrooms: formData.bedrooms.value,
     bathrooms: formData.bathrooms.value,
     levels: formData.levels.value,
     price: formData.price.value,
     imgUrl: formData.imgUrl.value,
      description: formData.description.value
    })
    housesApi.post('', newHouse)
    .then(res => {
      this.getHouses(draw)
     console.log(res.data)
    })
    console.log(houses)

  }
}
