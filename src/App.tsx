import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from './components/Todo';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>Todo-List-React-Redux-Assignment</h1>
      </Grid.Row>
      <Grid.Row>
        <Todo />
      </Grid.Row>
      </Grid>
  );
}

export default App;