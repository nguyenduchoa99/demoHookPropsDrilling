import { ToDoFilter, ToDoForm, ToDoList } from '@components/index';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ToDoContext from '../contexts/ToDoContext';

import './styles.css'

const ToDoApp = () => {
	const [todoList, setTodoList] = useState([]);

	const [editTodo, setEditTodo] = useState(null);

	const [filter, setFilter] = useState('all');

	const [todoRender, setTodoRender] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
				const todoGetData = data.map(todo => ({ ...todo, isDone: todo.completed, value: todo.title }));
				setTodoList(todoGetData);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	useEffect(() => {
		setTodoRender(
			todoList.filter(todo => {
				switch (filter) {
					case 'active':
						return !todo.isDone;
					case 'completed':
						return todo.isDone;
					default:
						return true;
				}
			})
		);
	}, [filter, todoList]);

	const handleToggle = todo => {
		const index = todoList.findIndex(element => element.id === todo.id);
		todoList[index].isDone = !todoList[index].isDone;
		setTodoList([...todoList]);
	};

	const handleDelete = todo => {
		const todoDelete = todoList.filter(element => element.id !== todo.id);
		setTodoList(todoDelete);
	};

	const handleEdit = todo => {
		setEditTodo(todo);
	};

	const handleSubmit = value => {
		if (editTodo) {
			const index = todoList.findIndex(element => element.id === editTodo.id);
			todoList[index].value = value;
			setTodoList(todoList);
			setEditTodo(null);
		} else {
			const todoAdd = [{ id: Date.now(), value, isDone: false }, ...todoList];
			setTodoList(todoAdd);
		}
	};

	const handleFilter = filter => {
		setFilter(filter);
	};

	return (
		<div>
			<div className="header">
				<h1 className="header__title">My Todos</h1>
			</div>
			<div className="todo-container-wrapper">
				<div className="todo-container">
					<ToDoForm editTodo={editTodo} onSubmit={handleSubmit} />
					<ToDoFilter onFilter={handleFilter} filter={filter} quantity={todoRender.length} />
					<ToDoContext.Provider value={{ onToggle: handleToggle, onDelete: handleDelete, onEdit: handleEdit }}>
						<ToDoList todoList={todoRender} />
					</ToDoContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default ToDoApp;
