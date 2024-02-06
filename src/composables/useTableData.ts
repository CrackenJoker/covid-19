import { ref } from 'vue'

export interface ISimpleTableData {
  nome: string
  pais: string
  estado:string
}

export interface IPaginatedTableData {
  pais: string
  total: number
 
}

export interface IWideTableData {
  nome: string
  estado: string
  pais: string
 
}

export function useTableData() {
  const simpleTableData = ref<ISimpleTableData[]>([
    { pais: 'Angola', estado: 'normal',nome:'Jorge' },
    { pais: 'Congo', estado: 'normal', nome:'Aldair' },
    { pais: 'Moçambique', estado: 'normal', nome:'Augusto' },
    { pais: 'Africa do Sul', estado: 'crítico', nome:'Cracken' },
    { pais: 'Angola', estado: 'normal',nome:'Jorge' },
    { pais: 'Congo', estado: 'normal', nome:'Aldair' },
    { pais: 'Moçambique', estado: 'normal', nome:'Augusto' },
    { pais: 'Africa do Sul', estado: 'crítico', nome:'Cracken' }, { pais: 'Angola', estado: 'normal',nome:'Jorge' },
    { pais: 'Congo', estado: 'normal', nome:'Aldair' },
    { pais: 'Moçambique', estado: 'normal', nome:'Augusto' },
    { pais: 'Africa do Sul', estado: 'crítico', nome:'Cracken' }, { pais: 'Angola', estado: 'normal',nome:'Jorge' },
    { pais: 'Congo', estado: 'normal', nome:'Aldair' },
    { pais: 'Moçambique', estado: 'normal', nome:'Augusto' },
    { pais: 'Africa do Sul', estado: 'crítico', nome:'Cracken' },
  ])

  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      pais: 'Angola',
      total: 4,
    },
    {
      pais: 'Congo',
      total: 4,
    },
    {
      pais: 'Moçambique',
      total: 4,
    },

    {
      pais: 'Africa do Sul',
      total: 4,
    },
    
  ])

  const wideTableData = ref<IWideTableData[]>(
    [...Array(10).keys()].map(() => ({
      nome: 'John Doe',
      estado: 'bom',
      pais: 'Angola',
      
    })),
  )

  return {
    simpleTableData,
    paginatedTableData,
    wideTableData,
  }
}
