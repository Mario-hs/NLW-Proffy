// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação 
function cloneField(){
    //console.log("cheguei aqui")
    // Duplicar os campos    
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Antes de colocar na páginas 
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele 
        field.value = ""
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
