import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const titleClickHandler = () => {
    setTitle('New Title');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
        <button onClick={titleClickHandler}>Click</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
