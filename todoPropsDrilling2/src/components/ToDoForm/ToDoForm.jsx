import { useEffect, useRef, useState } from 'react';

import './styles.css'

const ToDoForm = ({ editTodo, onSubmit }) => {
	const [value, setValue] = useState('');
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	});

	useEffect(() => {
		if (editTodo) {
			inputRef.current.focus();
			setValue(editTodo.value);
		}
	}, [editTodo]);

	const handleChange = e => {
		setValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(value);
		setValue('');
	};

	return (
		<div className="todo-form-container">
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="What need to be done?" value={value} onChange={handleChange} ref={inputRef} />
			</form>
		</div>
	);
};

export default ToDoForm;
