import React , {useId} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addNote, deleteNote } from './redux/noteSlice'

const App = () => {
  const notes = useSelector((state) => state.note);
  console.log(notes)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const title = e.target.elements.title.value;
    if (title.length < 31){
      e.preventDefault();
      const index = notes.lengh + 1;
      dispatch(addNote({title,index}));
      e.target.elements.title.value = '';
    }
    else {
      e.preventDefault()
      alert("Too long")
    }

  }
  return (
    <div className='flex w-full justify-center items-center flex-col space-y-6'>
      <div className='w-72 h-[12rem] bg-purple-200 flex justify-center p-5 rounded-full shadow-lg'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col items-center space-y-4'>
            <label htmlFor="title">Title: </label>
            <textarea type="text" placeholder='Task' name="title"
              className='rounded-full text-center ' />
            <button className='bg-yellow-400 w-36 h-10 rounded-full text-2xl hover:scale-105 duration-200'>Add</button>
              </div>
            </form>
      </div>
      <div className='space-y-8'>
        {notes.map((note, index) => (
          <div key={index} className='w-72 h-[4rem] bg-green-400 shadow-lg rounded-full flex flex-row
            justify-between px-5 items-center min-w-fit'>
            <h2 className='rounded-full bg-yellow-100 p-2'>{note.title}</h2>
            <button onClick={() => dispatch(deleteNote(index))}>Delete</button>
          </div>
        ))}

      </div>

    </div>
  )
}

export default App