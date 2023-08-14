import { FC, useState } from 'react'
import { useJobsStore } from '@/stores/jobs.store'

type JobListPageProps = {}

const JobListPage: FC<JobListPageProps> = ({}) => {
  const jobsStore = useJobsStore()

  const [jobs, setJobs] = useState(jobsStore.jobs)

  return (
    <>
      <div className='flex flex-col items-center space-y-2'>
        <h1 className='text-2xl font-bold'>Job List</h1>
        <p className='text-sm text-gray-500 text-center shadow-lg border-2 border-gray-200 rounded-md p-3 w-96'>
          This field is gonna be replaced with a list of jobs
        </p>
      </div>
    </>
  )
}

export default JobListPage
