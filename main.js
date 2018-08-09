import CarController from "./app/components/cars/CarController.js";
import HouseController from "./app/components/house/HouseController.js"


export default class App {
  constructor() {
    this.controllers = {
      carController: new CarController()
      houseController: new HouseController()
    }
  }
}

//@ts-ignore
window.app = new App()