import { IOrganizers } from "./IOrganizers"
import ISchedules from "./ISchedules"


export interface IHomepage {
    data: Data
    meta: Meta
  }
  
interface Data {
    id: number
    attributes: Attributes
  }
  
export interface Attributes {
    heroTitle: string
    heroDescription: string
    aboutTitle: string
    aboutDescription: string
    createdAt: string
    updatedAt: string
    organizers: IOrganizers[]
    schedules: ISchedules[]
  }
  
interface Meta {}
  