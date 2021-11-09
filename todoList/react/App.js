import React, { useState } from 'react';

export default function App() {
    const [todoList, setToDoList] = useState([]);       //상태값으로 변경
    const [currentId, setCurrentId] = useState(1);
    const [desc, setDesc] = useState('');
    function onAdd() {
        const todo = { id: currentId, desc};
        setCurrentId(currentId+1);
        setToDoList([...todoList, todo]);
    }
    function onDelete(e) {
        const id = Number(e.target.dataset.id);
        const newToDoList = todoList.filter(todo => todo.id !== id);
        setToDoList(newToDoList);
    }
    function onSaveToServer() {}
    return (
        <div>
            <h3>할 일 목록</h3>
            <ul>
                {todoList.map(todo => {
                    <li key={todo.id}>
                        <span>{todo.desc}</span>
                        <button data-id={todo.id} onClick={onDelete}>
                            삭제
                        </button>
                    </li>
                })}
            </ul>
            <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
            <button onClick={onAdd}>추가</button>
            <button onClick={onSaveToServer}>서버에 저장</button>
        </div>
    );
}