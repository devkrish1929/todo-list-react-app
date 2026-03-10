import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./firebaseconfig"

function TodoList() {
    const [todos, setTodos] = useState([])

    const deleteTodo = (id) => {
        const docRef = doc(db, "todos", id)
        deleteDoc(docRef)
    }

    useEffect(() => {
        const colRef = collection(db, "todos")
        const unsubscribe = onSnapshot(colRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setTodos(data)
        })

        return () => unsubscribe()
    }, [])

    return (
        <>
            <div className="todolist">
                {
                    todos && todos.map(function (todo) {
                        return (
                            <div className="todo" key={todo.id}>
                                <p>{todo.title}</p>
                                <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TodoList;