const $ = selector => document.querySelector(selector)

//Validation form

const validateForm = (e) =>{
   e.preventDefault()
   const note = $('.note').value
   return note.length > 2 ? console.log(note) : console.log('Error')

}

const initialize = () =>{
   $('#buttonAddNote').addEventListener('click', validateForm)
}

initialize()