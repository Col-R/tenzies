export default interface DieProps {
  id: string;
  value: number;
  isHeld: boolean;
  hold: (id: string) => void;
}
