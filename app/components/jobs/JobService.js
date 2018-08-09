import Job from '../../models/Job.js'

let jobs = []

export default class JobService {
  constructor() {

  }

  getJobs() {
    let jobsCopy = []

    //same as below
    // for (let i = 0; i < cars.length; i++) {
    //   const car = cars[i];

    // }

    // this is just saying for each 'car'
    //  in the whole cars array do whatever is in the code block 
    jobs.forEach(job => {
      jobsCopy.push(new Job(
        job.positionTitle,
        job.location,
        job.pay,
        job.description,
        job.imgUrl,
        job.contactNum
      ))
    })
    return jobsCopy
  }

  addJob(formData) {
    let newJob = new Job(
      formData.positionTitle.value,
      formData.location.value,
      formData.pay.value,
      formData.description.value,
      formData.imgUrl.value,
      formData.contactNum.value
    )
    jobs.push(newJob)
    console.log(jobs)

  }
}