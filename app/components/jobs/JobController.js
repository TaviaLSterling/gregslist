import JobService from "./JobService.js";

let jobService = new JobService()

function drawJobs(jobs) {
 // let jobs = jobService.getJobs()
  let template = ''

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    template += `
    <div id="job-ad" class="col-3">
        <p>Company: ${job.company}</p>
        <p>Job Title: ${job.jobTitle}</p>
        <p>Rate: ${job.rate}</p>
        <p>Hours: ${job.hours}</p>
        <p>Description: ${job.description}</p>
    </div>
    `
  }

  document.getElementById('jobs').innerHTML = template


}

export default class JobController {

  constructor() {
    jobService.getJobs(drawJobs)
  }

  addJob(e) {
    e.preventDefault();
    let formData = e.target
    jobService.addJob(formData,drawJobs)
    formData.reset()
    drawJobs()
  }

}