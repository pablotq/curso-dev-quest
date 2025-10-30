
import TodoForm from './components/TodoForm'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList';

import { useContext } from 'react';
import { themeConfig } from './contexts/theme'
import { themeContext } from './contexts/ThemeContext';

function App() {
  
    const {theme} = useContext(themeContext);

  return (
    <>
      <main className={`${themeConfig[theme].layout.backgroundColor} h-screen`}>
        <div className={`${themeConfig[theme].layout.mobile} md:${themeConfig[theme].layout.image} h-80 bg-cover bg-center `}>
          <div className='max-w-175 m-auto p-8'>
            <TodoHeader></TodoHeader>
            <TodoForm />
            <TodoList></TodoList>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App
