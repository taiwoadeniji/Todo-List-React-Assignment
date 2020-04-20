import React from 'react';
import { RootState } from '../store';
import { removeListFromTodo, addListToTodo } from '../store/todo/action';
import { List} from '../store/todo/types';
import { Grid, Form, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface ITodoProps {
    lists: List[]
    removeListFromTodo: typeof removeListFromTodo,
    addListToTodo: typeof addListToTodo,
  }

export class Todo extends React.Component<ITodoProps>
{
  generateID = (): number => {
    let randomNumber: number = Math.floor( Math.random() * 1000 );
    randomNumber += this.props.lists.length;
    return randomNumber;
  }
  addTask = ( event: any ) => {
    event.preventDefault();
    
    const formField: HTMLInputElement | null = document.querySelector( '[name="task-name"]' );
    let formFieldValue: string = '';
    if ( formField !== null ) formFieldValue = formField.value;
    
    this.props.addListToTodo( {
      id: this.generateID(),
      name: formFieldValue
    } );
  
}
  deleteTask = ( id: number ) => {
    this.props.removeListFromTodo( id );
  }
  render ()
  {
    return (
      <Grid>
        <Grid.Row>
          <Form onSubmit={this.addTask}>
            <Form.Field>
              <label htmlFor="task-name">Enter Task</label>
              <Input name="task-name" type='text' />
            </Form.Field>
            <Input type="submit" value="Add-To-Task" />
          </Form>
        </Grid.Row>
        <Grid.Row>
        <h3>Todo-Lists</h3>
        <ul>
            {(this.props.lists.length > 0) ?
          this.props.lists.map( element => (
              <li>
                {element.name}
                <Button
                  size='mini'
                  color='red'
                  onClick={event => {
                    this.deleteTask( element.id )
                   } }>
                  &times;
                </Button>
              </li>
          ) ) :
            
          <p>There are no taks left to remove!!!!</p>
          }
        </ul>
        </Grid.Row>
      </Grid>
    );
  }
}


const mapStateToProps = ( state: RootState ) => {
  return {
    lists: state.todo.lists
  }
}


export default connect(
  mapStateToProps,
  { addListToTodo, removeListFromTodo }
)( Todo );


/* Please delete all the todo-List to see the Error Message */