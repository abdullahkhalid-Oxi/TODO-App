
// todos.map((todositem) => {
//     return (<><p className='bg-danger'>{todositem}</p> <span className='icons'>
//         <i className="fa-solid fa-trash-can"></i>
//     </span></>)
// })

// {
//     todos.map((todositem) => {
//         return (<><p className='bg-danger'>{todositem}</p> </>)
//     })
// }


import React, { useState } from 'react'

function Secondhome() {

    const [todos, setTodos] = useState([""])
    const [text, setText] = useState("default")
    const [editingIndex, setEditingIndex] = useState(-1)

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleOnClick = () => {
        setTodos([...todos, text])
        setText("")
        // console.log(todos)
    }
    const handleOnKey = (key) => {
        console.log("key")
        if (key === 13) {
            setTodos([...todos, text])
            setText("")
        }
    }

    const handleDelete = (index) => {
        console.log(index)
        const temp = [...todos]
        temp.splice(index, 1)
        setTodos(temp);
    }
    const handleEdit = (index) => {
        console.log(index)
        const temp = [...todos]
        setEditingIndex(index)
        setText(todos[index])
    }
    const handleUpdate = () => {
        const temp = [...todos]
        temp[editingIndex] = text
        setTodos(temp)
        setText("")
        setEditingIndex(-1)
    }
    return (
        <>
            <h1 className='bg-primary'>TODO Application</h1>
            <div className='mt-4 container justify-content-center align-items-center bg-success border'>
                <div className='container '>
                    <input type="text" value={text} onChange={handleOnChange} />

                    {text === "" ? (
                        <button className='text-grey' disabled={true} ><i>Plx Type Something</i></button>) : (
                        <button onClick={handleOnClick} onKeyDown={handleOnKey} >ADD ITEM</button>)
                    }
                </div>
                <div>
                    {
                        todos.map((todositem, index) => (
                            <div className='todo-item ' key={index}>

                                {/* {editingIndex === index ? (
                                    <input type="text" value={text} onChange={handleOnChange} />
                                ) : (
                                    <p className='bg-danger d-flex '>{todositem}</p>)} */}

                                {index > 0 ? (<span className='icons c bg-danger'>
                                    <i className="fa-regular fa-pen-to-square fa-beat" onClick={() => handleEdit(index)}></i>
                                    <i className="fa-solid fa-trash-can c bg-primary" onClick={() => handleDelete(index)}></i>
                                </span>) : (<></>)}
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Secondhome

// todos.map((todositem) => {
//     return (<><p className='bg-danger'>{todositem}</p> <span className='icons'>
//         <i className="fa-solid fa-trash-can"></i>
//     </span></>)
// })

// {
//     todos.map((todositem) => {
//         return (<><p className='bg-danger'>{todositem}</p> </>)
//     })
// }


    // const handleDelete = (index) => {
    //     console.log(index)
    //     setTodos(todos.splice(index))
    //     // setTodos([""],index)
    //     console.log("Onclick cll")
    // }

    // console.log("HELLO")
    //                             console.log(index)