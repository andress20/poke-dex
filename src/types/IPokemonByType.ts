export interface PokemonByType {
  id: number
  name: string
  damageRelations: DamageRelations
  pastDamageRelations: PastDamageRelation[]
  gameIndices: GameIndex[]
  generation: Generation
  moveDamageClass: Generation
  names: Name[]
  pokemon: Pokemon[]
  moves: Generation[]
}

export interface DamageRelations {
  noDamageTo: Generation[]
  halfDamageTo: Generation[]
  doubleDamageTo: Generation[]
  noDamageFrom: Generation[]
  halfDamageFrom: Generation[]
  doubleDamageFrom: Generation[]
}

export interface Generation {
  name: string
  url: string
}

export interface GameIndex {
  gameIndex: number
  generation: Generation
}

export interface Name {
  name: string
  language: Generation
}

export interface PastDamageRelation {
  generation: Generation
  damageRelations: DamageRelations
}

export interface Pokemon {
  slot: number
  pokemon: Generation
}
