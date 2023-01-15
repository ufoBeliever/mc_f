export interface PaginationButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  num: number | string;
  checked?: boolean;
}
