import React, { useState } from 'react'

function Home() {

    const [todos, setTodos] = useState([""])
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleOnClick = () => {
        setTodos([...todos, text])
        setText("")
    }
    // const handleDelete = (index) => {
    //     console.log(index)
    //     setTodos(todos.splice(index))
    //     // setTodos([""],index)
    //     console.log("Onclick cll")
    // }
    const handleDelete = (index) => {
        console.log(index)
        const temp=[...todos]
        temp.splice(index,1)
        setTodos(temp);
    }
    return (
        <>
            <h1 className='bg-primary'>TODO Application</h1>
            <div className='mt-4 container justify-content-center align-items-center bg-success'>
                <div className=''>
                    {/* <i className="fa-solid fa-trash-can"></i> */}
                    <input type="text" value={text} onChange={handleOnChange} />

                    {text === "" ? (
                        <button className='text-grey' disabled={true} onClick={handleOnClick}><i>Plx Type Something</i></button>) : (
                        <button  onClick={handleOnClick}>ADD ITEM</button>)
                    }
                </div>
                <div>
                    {
                        todos.map((todositem, index) => (
                            <div key={index} className='todo-item '>
                                <p className='bg-danger'>{todositem}</p>
                                {/* <span className='icons' onClick={() => handleDelete(index)}> */}
                                {index > 0 ? (<span className='icons ' onClick={() => handleDelete(index)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </span>):(<></>)}
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Home

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