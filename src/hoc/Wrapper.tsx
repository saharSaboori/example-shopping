import { FC, ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
const Wrapper: FC<IProps> = ({ children }) => children as React.ReactElement;
export default Wrapper;
