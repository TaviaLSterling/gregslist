import Job from '../../models/Job.js'

let jobs = []

const jobsApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs',
  timeout: 3000
})

export default class JobService {
  constructor() {

  }

  getJobs(draw) {
    jobsApi.get()
    .then(res => {
    let jobs = res.data.data.map(rawJob=> {
      return new Job(rawJob)
    })
    draw(jobs)
    })

    //same as below
    // for (let i = 0; i < cars.length; i++) {
    //   const car = cars[i];

    // }

    // this is just saying for each 'car'
    //  in the whole cars array do whatever is in the code block 
 //   jobs.forEach(job => {
  //    jobsCopy.push(new Job(
   //     job.positionTitle,
    //    job.location,
  //      job.pay,
  //      job.description,
   //     job.imgUrl,
  //      job.contactNum
   //   ))
 //   })
 //   return jobsCopy
  }

  addJob(formData,draw) {
    let newJob = new Job({
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      hours: formData.hours.value,
      description: formData.description.value,
      rate: formData.rate.value
    })
    jobsApi.post('', newJob)
   .then(res => {
     this.getJobs(draw)
    console.log(res.data)
   })

  }
}