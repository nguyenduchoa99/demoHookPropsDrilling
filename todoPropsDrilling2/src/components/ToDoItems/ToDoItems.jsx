import { useContext } from 'react';
import ToDoContext from 'src/contexts/ToDoContext';
import iconActive from '../../assets/imgs/active-tick.svg';
import iconCompleted from '../../assets/imgs/complete-tick.svg';
import iconDelete from '../../assets/imgs/delete.svg';
import iconEdit from '../../assets/imgs/edit.svg';

import './styles.css';

const ToDoItems = ({ todo }) => {
	const { onToggle, onDelete, onEdit } = useContext(ToDoContext);
	return todo.isDone ? (
		<div className="todo-item-container">
			<span className="todo-item-toggle">
				<img onClick={() => onToggle(todo)} className="icon-active-completed" src={iconCompleted} alt="" />
			</span>
			<div className="todo-item-content completed">{todo.value}</div>
			<div className="todo-item-options">
				<span className="icon-btn">
					<img onClick={() => onDelete(todo)} className="icon-delete" src={iconDelete} alt="" />
				</span>
			</div>
		</div>
	) : (
		<div className="todo-item-container">
			<span className="todo-item-toggle">
				<img onClick={() => onToggle(todo)} className="icon-active-completed" src={iconActive} alt="" />
			</span>
			<div className="todo-item-content">{todo.value}</div>
			<div className="todo-item-options">
				<span className="icon-btn">
					<img onClick={() => onEdit(todo)} className="icon-edit" src={iconEdit} alt="" />
				</span>
				<span className="icon-btn">
					<img onClick={() => onDelete(todo)} className="icon-delete" src={iconDelete} alt="" />
				</span>
			</div>
		</div>
	);
};

export default ToDoItems;
