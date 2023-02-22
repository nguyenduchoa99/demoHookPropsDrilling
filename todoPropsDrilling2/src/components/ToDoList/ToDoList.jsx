import { ToDoItems } from '..';

import './styles.css';

const ToDoList = ({ todoList }) => (
	<div className="todo-list-container">
		{todoList.map(todo => (
			<ToDoItems key={todo.id} todo={todo} />
		))}
	</div>
);

export default ToDoList;
