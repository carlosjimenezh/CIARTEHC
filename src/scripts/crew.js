import EQUIPO from '../data/equipo.json'

document.querySelector('#equipo').addEventListener('click', (e) =>{
    const crewElement = e.target.closest('.crew')
    
    if (crewElement) {
        // console.log(crewElement.parentElement.dataset.id)
        const crewId = parseInt(crewElement.parentElement.dataset.id, 10)
        showCrewModal(crewId)
        document.querySelector('#cerrar-modal').addEventListener('click', () => {
          document.querySelector('#modal').innerHTML = ''
        })
    }
})


const showCrewModal = (id) => {
    const crewElement = EQUIPO.find(item => item.id === id)
    console.log(crewElement)
    const { nombre, cargo, prefijo, avatar, ubicacion, tel, extension, email, semblanza } = crewElement
    document.querySelector('#modal').innerHTML = `
    <div class="relative z-[100]" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <span class="absolute top-2 right-3 cursor-pointer" id="cerrar-modal">x</span>
                <div class="sm:flex sm:items-start">
                  
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div class="text-center">
                      <img src="${avatar}" style="width: 50px" />
                    </div>
                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">${prefijo + ' ' + nombre}</h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">${cargo}</p>
                      <p class="text-sm text-gray-500">${ubicacion}</p>
                      <p class="text-sm text-gray-500">${tel}</p>
                      <p class="text-sm text-gray-500">${extension}</p>
                      <p class="text-sm text-gray-500">${email}</p>
                      <p class="text-sm text-gray-500">${semblanza}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                  Descargar CV
                </button>
              </div>
            </div>
          </div>
      </div>
  </div>
  `
}


