export default class House {
    constructor(data) {
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description
        this.year = data.year
        this.id = data.id
    }
}