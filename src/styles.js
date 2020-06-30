import styled from "styled-components";

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

export { Title, Description, ShopImage, ListWrapper };

const ListWrapper = styled.div`
  aligin-items: center;
  justify-content: center;
  display: flex;
`;

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
