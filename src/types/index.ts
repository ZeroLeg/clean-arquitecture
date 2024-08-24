export interface Location {
  id: number
  name: string
}

export interface Npc {
  id: number
  location_id: number
  race_id: number
  title_id: number
  name: string
}

export interface Quest {
  id: number
  title: string
  description: string
  creationDate: Date
  expiratonDate: Date
  img: string
  logX: number
  logY: number
  npc: number
  reward: string
}

export interface Race {
  id: number
  name: string
}
