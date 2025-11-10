
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { TodoContainer } from './components/TodoContainer';
import { useTodo } from './hooks/useTodo';

function App() {

  const { addTodo,toggleTodoCompleted, filteredTodos, clearCompleted, setFilter, filter, removeTodo , refresh, setRefresh} = useTodo();
  

return (
  <>
    <TodoContainer>
      <TodoHeader></TodoHeader>
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={filteredTodos} toggleTodoCompleted={toggleTodoCompleted} setFilter={setFilter}
      filter={filter}
      clearCompleted={clearCompleted}
      removeTodo={removeTodo}></TodoList>

      <button className='bg-amber-300 p-2' onClick={() => setRefresh(!refresh)}>Recarregar lista</button>
      <p className='text-white'>Status do Refresh: {refresh.toString()}</p>
    </TodoContainer>
  </>
)
}

export default App
