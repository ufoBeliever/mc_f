export interface HeaderLinkProps
  extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  link: string;
  mobile?: boolean;
}
