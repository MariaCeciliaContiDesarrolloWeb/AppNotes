const $ = selector => document.querySelector(selector)
const id = () => self.crypto.randomUUID()

const set = (key, arr) => localStorage.setItem(key, JSON.stringify(arr))
const get = key => JSON.parse(localStorage.getItem(key))

const allNotes = () => !get('notes') ?  set('notes', []) : console.log('ya hay')

//Validation form
const validateForm = () =>{
   const note = $('.note').value
   return note.length > 2 ? console.log('mayor') : console.log('Error')
}

const notesObject = () =>{
   return{
      id:id(),
      note: $("#note").value,
      date: new Date()
   }
}

const addNote = () =>{
   const savedNotes = get('notes')
   const newNote = notesObject()
   savedNotes.push(newNote)
   set('notes', savedNotes)
   console.log(get('notes'))
}

const showNotes = (notes) =>{
   $('#showNotes').innerHTML = ''
   for( const {id, note, date}  of notes){
      $('#showNotes').innerHTML += `
         <tr>
            <td>${date}</td>
            <td>${note}</td>
            <td onclick="deleteNote('${id}')">Eliminar</td>
         </tr>
      `
   } 

}


const deleteNote = (id) =>{
   const deleteNote = get('notes').filter(note => note.id != id)
   set('notes', deleteNote)
   showNotes(get('notes'))
}


const initialize = () =>{
   $('#buttonAddNote').addEventListener('click',  (e) =>{
      e.preventDefault()
      validateForm()
      console.log(notesObject())
      addNote()
   })
   allNotes()
   showNotes(get('notes'))
   
}

window.addEventListener('load', initialize)