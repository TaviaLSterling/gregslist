import CarService from "./CarService.js";

let carService = new CarService()

function drawCars(cars) {
 // let cars = carService.getCars()
  let template = ''

  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    template += `
    <div id="car-ad" class="col-3">
        <p>Make: ${car.make}</p>
        <p>Model: ${car.model}</p>
        <p>Price: ${car.price}</p>
        <p>Year: ${car.year}</p>
        <p>Description: ${car.description}</p>
        <img src="${car.imgUrl}">
    </div>
    `
  }

  document.getElementById('cars').innerHTML = template


}

export default class CarController {

  constructor() {
    carService.getCars(drawCars)
  }

  addCar(e) {
    e.preventDefault();
    let formData = e.target
    carService.addCar(formData,drawCars)
    formData.reset()
    drawCars()
 }

}