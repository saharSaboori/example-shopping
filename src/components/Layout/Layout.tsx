import React, { FC, ReactNode } from "react";
import Wrapper from "../../hoc/Wrapper";

interface IProp {
  children: ReactNode;
}

const Layout: FC<IProp> = (props: IProp) => {
  return (
    <Wrapper>
      <div>Navigation</div>
      <main className="mt-4">{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
