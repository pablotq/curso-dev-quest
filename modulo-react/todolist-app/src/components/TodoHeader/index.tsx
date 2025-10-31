import { themeConfig } from '../../contexts/theme'
import { themeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

const TodoHeader = () => {

  const {theme, toggleTheme} = useContext(themeContext);

  return (
    <header className='flex justify-between mb-8 p-5'>
      <h1 className='text-white text-4xl sm:text-[3rem] font-bold tracking-[1rem]'>TODO</h1>

      <button className='cursor-pointer' onClick={toggleTheme}>
        <img className='w-8 h-8' src={`${themeConfig[theme].icon}`} alt="Alterar tema" />
      </button>
    </header>
  );
};

export default TodoHeader;