export interface PaginationProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}
