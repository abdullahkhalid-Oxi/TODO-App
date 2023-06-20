import { useRef, useState } from "react";
import { Typography } from "@mui/material";


function Firsthome() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([""]);
    const [editingIndex, setEditingIndex] = useState(-1);
    const [check, setCheck] = useState(69);
    const textInputRef =useRef(null);

    const handleOnChange = (event) => {
        setText(event.target.value);
        console.log("event =" + event)
    };
    const handleDelete = (index) => {
        console.log(index);
        const temp = [...todos];
        temp.splice(index, 1);
        console.log(temp);
        setTodos(temp);
        setText("")   
        //              above line after clicking edit icon than delete set input to null
        setCheck(69)
    };

    const handleOnClickAddbutton = () => {
        setTodos([...todos, text]);
        setText("");
        // setCheck(69);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setText(todos[index]);
        textInputRef.current.focus();
        setCheck(1);
        setTimeout(() => {
            textInputRef.current.setSelectionRange(0, textInputRef.current.value.length);
          }, 0);
        
    };

    const handleUpdatebutton = () => {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = text;
        setTodos(updatedTodos);
        setText("");
        setEditingIndex(-1);
        
        setCheck(69)
    };

    // const handleKeyPress=()=>{

    // }
    const handleKeyPress =(event)=>{
        if(event.key==="Enter" && check===69)
        {
            handleOnClickAddbutton();
            event.preventDefault();
        }
       else if(event.key==="Enter" && check!==69)
        {
            handleUpdatebutton();
            event.preventDefault();
        }
    }
    return (
        <>
            <h1 className="bg-primary  ">TODO Application</h1>
            <div className="mt-4 container justify-content-center align-items-center bg-success">
                <div className="">
                    {/* <i className="fa-solid fa-trash-can"></i> */}
                    <input type="text" ref={textInputRef} onKeyDown={handleKeyPress}  placeholder="Enter your Item here" value={text} onChange={handleOnChange} />

                    {text === "" ? (
                        <button
                            className="text-grey"
                            disabled={true}
                            onClick={handleOnClickAddbutton}
                        >
                            <i>Plx Type Something</i>
                        </button>
                    ) : (
                        // <button onClick={handleOnClickAddbutton}> {check === 69 ? ( <>ADD ITEM</> ) : (<>UpDate Item</>) } </button>
                        <button
                            onClick={
                                check === 69 ? (handleOnClickAddbutton) : (handleUpdatebutton)
                            }
                        >
                            {check === 69 ? (<p> ADD ITEM</p>) : (<p>UpDate Item</p>)}
                        </button>
                    )}
                </div>
                <div>
                    {todos.map((todositem, index) => (
                        <div key={index} className="todo-item ">
                            {/* <span className='icons' onClick={() => handleDelete(index)}> */}
                            {index > 0 ? (
                                <>
                                    <p className="bg-danger">
                                        {index + " "}
                                        {todositem}
                                    </p>
                                    <span className="icons bg-primary ">
                                        <i
                                            className="fa-regular fa-pen-to-square fa-beat"
                                            onClick={() => handleEdit(index)}
                                        ></i>
                                        <i
                                            className="fa-solid fa-trash-can bg-danger"
                                            onClick={() => handleDelete(index)}
                                        ></i>
                                        {/* <button onClick={handleUpdatebutton}>Update ITEM </button> */}
                                    </span>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Firsthome;

// const handleEdit = (index) => {
//     const currentTodo=todos[index];
//     const editedTodo=  prompt("Enter new one: ",currentTodo+"");
//     // setText(todos[index])
//     const updatedTodos = [...todos];
//     updatedTodos[index]= editedTodo;
//     setTodos(updatedTodos)
// }
// const handleEdit = (index) => {
//     const updatedTodos = [...todos];

//     setTodos(updatedTodos)
// }

// {check==1 ? ({check}) : (<></>)}


// const handleEdit = (index) => {
//     // Set the editing index to the clicked item's index
//     setEditingIndex(index);
//     setCheck(1);
//     // Set the text state to the value of the clicked item
//     setText(todos[index]);
//     // handleUpdate(ind ex)
// };

// const handleUpdate = () => {
//     // Create a copy of the todos array
//     const updatedTodos = [...todos];

//     // Update the todo item at the editing index with the new text
//     updatedTodos[editingIndex] = text;

//     // Update the todos state with the modified array
//     setTodos(updatedTodos);

//     // Clear the text state and reset the editing index
//     setText("");
//     setEditingIndex(-1);
// };


// const handleUpdatebutton = () => {
//     setCheck(69)
//     if (editingIndex !== -1) {
//         handleUpdate();
//     }
//     // else {
//     //     setTodos([...todos, text]);
//     // }
//     setText("");
// };
// const handleUpdate = () => {
//     const updatedTodos = [...todos];
//     updatedTodos[editingIndex] = text;
//     setTodos(updatedTodos);
//     setText("");
//     setEditingIndex(-1);
// };
