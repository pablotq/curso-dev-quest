import { useContext } from 'react';
import { themeConfig } from '../../contexts/theme'
import { ThemeContext } from '../../contexts/ThemeContext';

const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' },
];

const TodoList = () => {
  const { theme } = useContext(ThemeContext);

  const hoverBottomButton = theme === "dark" ? "hover:text-dark-purple-100-hover" : "hover:text-light-navy-850";

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {
            todos.map((todo) => (
              <li className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`} key={todo.id}>
                <div className='flex items-center gap-4'>
                  <span className='w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px'>
                    <button className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor}`}></button>
                  </span>
                  <p className={`${themeConfig[theme].todo.textColor}`}>{todo.text}</p>
                </div>
              </li>
            ))
          }
        </ul>
        <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}>
          <p>{todos.length} items total</p>
          <div className='hidden sm:flex gap-4'>
            <button className='text-bright-blue cursor-pointer hover:text-[hsl(192,100%,67%)]'>All</button>
            <button className={`cursor-pointer ${hoverBottomButton}`}>Active</button>
            <button className={`cursor-pointer ${hoverBottomButton}`}>Completed</button>
          </div>
          <button className={`cursor-pointer ${hoverBottomButton}`}>Clear Comlpeted</button>
        </div>

      </div>
      <div className={`flex sm:hidden justify-center gap-5 py-4 mt-4 rounded-md ${themeConfig[theme].layout.textColor} ${themeConfig[theme].todo.backgroundColor} `}>
        <button className='text-bright-blue cursor-pointer hover:text-[hsl(192,100%,67%)]'>All</button>
        <button className={`cursor-pointer ${hoverBottomButton}`}>Active</button>
        <button className={`cursor-pointer ${hoverBottomButton}`}>Completed</button>
      </div>
    </>
  );
};

export default TodoList;