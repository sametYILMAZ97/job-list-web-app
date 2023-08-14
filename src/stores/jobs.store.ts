// zustand store
// for jobs array
// functions to update it and get it
import { create } from 'zustand'

// interface CounterStore {
//   count: number
//   increment: () => void
//   decrement: () => void
// }

// create a type for jobs
interface job {
  id: string
  title: string
  description: string
  company: string
  location: string
  salary: string
  type: string
  link: string
  date: string
  status: string
  notes: string
  contactName: string
  contactEmail: string
  contactPhone: string
  isRemote: boolean
  isApplied: boolean
  isRejected: boolean
  isRead: boolean
  isSaved: boolean
  isDeleted: boolean
}

interface jobsStore {
  jobs: job[]
  setJobs: (jobs: any[]) => void
  addJob: (job: any) => void
  removeJob: (job: any) => void
  updateJob: (job: any) => void
}

// export const useCounterStore = create<CounterStore>((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }))

export const useJobsStore = create<jobsStore>((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }),
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
  removeJob: (job) => set((state) => ({ jobs: state.jobs.filter((j) => j.id !== job.id) })),
  updateJob: (job) =>
    set((state) => ({
      jobs: state.jobs.map((j) => (j.id === job.id ? job : j)),
    })),
}))
