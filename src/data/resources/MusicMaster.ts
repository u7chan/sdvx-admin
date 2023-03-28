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
  tags: { name: string }[]
  pack: string
  platforms: { name: Platform }[]
  difficulties: Difficulty[]
}
