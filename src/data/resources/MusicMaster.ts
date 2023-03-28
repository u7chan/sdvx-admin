type Platform = 'arcade' | 'eacloud'

type Difficulty = {
  level: number
  charts: 'NOV' | 'ADV' | 'EXH' | 'MXM' | 'INF' | 'GRV' | 'HVN' | 'VVD' | 'XCD'
  jacketUrl: string
}

export type MusicMaster = {
  id: number
  title: string
  artist: string
  tags: string[]
  pack: string
  platforms: Platform[]
  difficulties: Difficulty[]
}
