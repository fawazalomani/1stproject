import styled,{createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

body{

background-color: ${(props => props.theme.backgroundColor)};
}


`


const Title = styled.h1`
  text-align: center;
  color: blue;
`;

const Description = styled.h3`
  text-align: center;
  color: red;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;

  margin: 30px;
  img {

    width:200px;
    height:200px;
  }
p{

  text-align: center;

  &.price {

    color:${(props) => props.theme.backgroundColor};
  }
}

`;

export { Title, Description, ShopImage, ListWrapper,GlobalStyle };



const styles = {
  text: {
    textAlign: "center",
  },

  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

  prodImage: {
    width: "200px",
    height: "200px",
  },

  list: {
    alignitems: "center",
    justifyContent: "center",
    display: "flex",
  },

  photmar: {
    margin: "30px",
  },
};

export default styles;
