// types: DieProps
import DieProps from '../types/DieTypes';

const Die = (props: DieProps) => {
  return (
    <button
      className='w-18 h-18 bg-white border-none rounded-xl shadow-2xl 
    text-2xl font-bold
    cursor-pointer'
    >
      {props.value}
    </button>
  );
};

export default Die;
