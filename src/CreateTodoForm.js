import React from 'react'

const CreateTodoForm = ({ createNewTodo }) => {
    const [label, setLabel] = React.useState("")

    return (
        <div className="create-todo-form">
            <input placeholder="Enter todo label"
            onChange={e=> setLabel(e.target.value)}
            value={label} />
            <button onClick={() => createNewTodo(label)}>
                Save Todo
            </button>
        </div>
    )
}

export default CreateTodoForm;