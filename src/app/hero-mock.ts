import {Hero} from './hero';

// Race: Human, Orc, Undead, Elf

export const HEROES: Hero[] = [
  { id: 7, name: 'Death Cry Beag', race: 'undead'},
  { id: 6, name: 'Crypt', race: 'undead'},
  { id: 7, name: 'Lichking', race: 'undead'},
  { id: 8, name: 'Sur Kyar', race: 'orc'},
  { id: 9, name: 'Iliden', race: 'elf'},
  { id: 10, name: 'Warchief', race: 'orc'},
  { id: 11, name: 'Mr. Nice', race: 'human'},
  { id: 12, name: 'Narco', race: 'undead'},
  { id: 13, name: 'Bombasto', race: 'human'},
  { id: 14, name: 'Celeritas', race: 'elf'},
  { id: 15, name: 'Magneta', race: 'human' },
  { id: 16, name: 'RubberMan', race: 'human' },
  { id: 17, name: 'Dynama', race: 'orc'},
  { id: 18, name: 'Dr IQ', race: 'human' },
  { id: 19, name: 'Magma', race: 'undead' },
  { id: 20, name: 'Tornado', race: 'elf' }
];

export const RACES: string[] = [
  'human',
  'undead',
  'orc',
  'elf'
];