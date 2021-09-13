import React from "react";
import { Wrapper, List } from "./styled";
import { Logo } from "assets/Logo";

export const Sidebar = () => (
  <Wrapper>
    <Logo fill={"black"} />
    <nav>
      <List>
        <li>
          <a href="/#">Dashboard</a>
        </li>
        <li>
          <a href="/#">Starlink</a>
        </li>
        <li>
          <a href="/#">Rockets</a>
        </li>
        <li>
          <a href="/#">Launches</a>
        </li>
        <li>
          <a href="/#">About</a>
        </li>
      </List>
    </nav>
  </Wrapper>
);
