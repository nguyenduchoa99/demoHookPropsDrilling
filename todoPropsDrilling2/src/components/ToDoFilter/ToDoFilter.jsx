import clsx from 'clsx';

import './styles.css'

const ToDoFilter = ({ onFilter, filter, quantity }) => {
	console.log(123);
	return (
		<div className="todo-filter-container">
			<div className="todo-filter-count">{quantity} Item left</div>
			<div className="todo-filter-status">
				<span onClick={() => onFilter('all')} className={clsx({ active: filter === 'all' })}>
					All
				</span>
				<span onClick={() => onFilter('active')} className={clsx({ active: filter === 'active' })}>
					Active
				</span>
				<span onClick={() => onFilter('completed')} className={clsx({ active: filter === 'completed' })}>
					Completed
				</span>
			</div>
		</div>
	);
};

export default ToDoFilter;
