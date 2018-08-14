export default class Job {
    constructor(data) {
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.hours = data.hours
        this.description = data.description
        this.rate = data.rate
    }
}