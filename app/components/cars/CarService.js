import Car from '../../models/Car.js'

let cars = []


const carsApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars',
  timeout: 3000
})



export default class CarService {
  constructor() {

  }

  getCars(draw) {
    carsApi.get()
    .then(res => {
    let cars = res.data.data.map(rawCar=> {
      return new Car(rawCar)
    })
    draw(cars)
    })

    //same as below
    // for (let i = 0; i < cars.length; i++) {
    //   const car = cars[i];

    // }

    // this is just saying for each 'car'
    //  in the whole cars array do whatever is in the code block 
 //   cars.forEach(car => {
  //    carsCopy.push(new Car(
   //     car.make,
    //    car.model,
     //   car.year,
      //  car.price,
   //     car.color,
    //    car.imgUrl
    //  ))
 //   })
 //   return carsCopy
  }

  addCar(formData, draw) {
    let newCar = new Car({
      make: formData.make.value,
      model: formData.model.value,
     year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    })
    //first parameter is any addition to base url
    //second parameter is object to pass to server
   carsApi.post('', newCar)
   .then(res => {
     this.getCars(draw)
    console.log(res.data)
   })

 }
}