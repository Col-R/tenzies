// types: DieProps
import DieProps from '../types/DieTypes';

const Die = (props: DieProps) => {
  return (
    <button
      className={`w-18 h-18 border-none rounded-xl shadow-2xl 
        text-2xl font-bold cursor-pointer hover:translate-y-1 transition-transform
        ${props.isHeld ? 'bg-green-400' : 'bg-white'}`}
      onClick={() => props.hold(props.id)}
      aria-label={`Die with value of ${props.value}, is currently ${props.isHeld ? 'held' : 'not held'}`}
      aria-pressed={props.isHeld}
    >
      {props.value}
    </button>
  );
};

export default Die;
