import styled, { createGlobalStyle } from "styled-components";

import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

body{

background-color: ${(props) => props.theme};
}


`;

export const Logo = styled(Link)`
  padding: 0.9em;

  img {
    width: 20%;
  }
`;

export const CreateButtonStyled = styled.button`
  color: black,
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const theme = {
  light: {
    maincolor: "black ",
    backgroundColor: "white",
    green: "black",
  },

  dark: {
    maincolor: "white ",
    backgroundColor: "black",
    green: "white",
  },
};
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const Searchbarstyled = styled.input`
  padiing: 0.5 rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  color: blue;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  nargin: 1.25em;
  padding: 0.25em 1 em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.maincolor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  color: blue;
`;

export const Description = styled.h3`
  text-align: center;
  color: red;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 30px;

  img {
    width: 200px;
    height: 200px;
  }
  p {
    vertical-align: middle;
  }
`;

export default styled;
