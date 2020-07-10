import React from "react";
import { Searchbarstyled } from "../styles";


const SearchBar = (props) => {

    return (<Searchbarstyled placeholder="Search for Product name" onChange={(event) => props.setQuery(event.target.value)} />

    );
}




export default SearchBar;