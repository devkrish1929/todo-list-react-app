import { useState } from "react"
import { db } from "./firebaseconfig"
import { addDoc, collection } from "firebase/firestore"

function AddTodo() {
  let [title, setTitle] = useState("");

  
  async function addTodo() {
    let colref = collection(db, "todos")
    await addDoc(colref, {title: title})
    setTitle("");
  }
  return (
    <>
      <h1>Todo app</h1>
      

        <div className="addform">
          <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Add your new todo" value={title} />
            <button className="add-btn" onClick={addTodo}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    </>
  )
}

export default AddTodo;