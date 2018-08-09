import JobService from "./JobService.js";

let jobService = new JobService()

function drawJobs() {
  let jobs = jobService.getJobs()
  let template = ''

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    template += `
    <div id="job-ad" class="col-3">
        <p>Position Title: ${job.positionTitle}</p>
        <p>Location: ${job.location}</p>
        <p>Pay: ${job.pay}</p>
        <p>Description: ${job.description}</p>
        <p>Contact Phone Number: ${job.contactNum}</p>
        <img src="${job.imgUrl}" alt="job picture">
    </div>
    `
  }

  document.getElementById('jobs').innerHTML = template


}

export default class JobController {

  constructor() {
    drawJobs()
  }

  addJob(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target
    jobService.addJob(formData)
    formData.reset()
    drawJobs()
  }

}