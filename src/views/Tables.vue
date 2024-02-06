<script setup lang="ts">
import { useTableData } from '../composables/useTableData'

const {
  simpleTableData,
  paginatedTableData,
  wideTableData,
} = useTableData()
</script>

<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Casos da Covid-19
    </h3>

    <div class="mt-4">
      <h4 class="text-gray-600">
        Novos Casos confirmados
      </h4>

      <div class="mt-6">
        <div class="my-6 overflow-hidden bg-white rounded-md shadow">
          <table class="w-full text-left border-collapse">
            <thead class="border-b">
              <tr>
                <th
                  class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
                >
                  Nome
                </th>
                <th
                  class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
                >
                  Estado
                </th>

                <th
                  class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
                >
                  País
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(i, index) in simpleTableData"
                :key="index"
                class="hover:bg-gray-200"
              >
                <td class="px-6 py-4 text-lg text-gray-700 border-b">
                  {{ i.nome }}
                </td>
                <td class="px-6 py-4 text-gray-500 border-b">
                  {{ i.estado }}
                </td>
                
                <td class="px-6 py-4 text-gray-500 border-b">
                  {{ i.pais }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="mt-8">
      
      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">
          Total confirmados
        </h2>

        <div class="flex flex-col mt-3 sm:flex-row">
 

          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              placeholder="Search"
              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            >
          </div>
        </div>

        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    País
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Total de casos
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(u, index) in paginatedTableData" :key="index">
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.pais }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.total }}
                    </p>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h4 class="text-gray-600">
        Novos Recuperados
      </h4>

      <div class="flex flex-col mt-6">
        <div
          class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Nome
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Estado
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Pais
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-100 border-b border-gray-200"
                  />
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="(u, index) in wideTableData" :key="index">
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="profile pic"
                        >
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm font-medium leading-5 text-gray-900"
                        >
                          {{ u.nome }}
                        </div>
                       
                      </div>
                    </div>
                  </td>

                  
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <span
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >{{ u.estado }}</span>
                  </td>

                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ u.pais }}
                  </td>

                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <h4 class="text-gray-600">
        Novos Recuperados
      </h4>

      <div class="flex flex-col mt-6">
        <div
          class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Pais
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Total recuperados
                  </th>
                  
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr >
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ 'Angola' }}
                  </td>

                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ '10' }}
                  </td>
                  
                </tr>

                <tr >
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ 'Moçambique' }}
                  </td>
                  
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ '0' }}
                  </td>
                  
                </tr>

                <tr >
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ 'Congo' }}
                  </td>
                  
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ '0' }}
                  </td>
                  
                </tr>

                <tr >
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ 'Africa do Sul' }}
                  </td>
                  
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ '0' }}
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
