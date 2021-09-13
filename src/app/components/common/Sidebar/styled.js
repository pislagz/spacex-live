import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  padding-top: 3.5rem;
  padding-left: 2.2rem;
  padding-right: 1rem;
  min-width: 12.5rem;
  background: rgba(255, 255, 255, 1);
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 5rem;
  padding: 0;

  a {
    text-decoration: none;
    color: black;
  }
`;

// export const List = styled(Box).attrs({ as: "ul" })`
//   list-style: none;
//   margin: 0;
//   margin-top: 5rem;
//   padding: 0;

//   a {
//     text-decoration: none;
//     color: black;
//   }
// `;
