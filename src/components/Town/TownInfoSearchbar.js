import React, { useState } from "react";
import styled from "styled-components";

 

const TwonInfoSearchbar = (props) => {

    const products = props.searchItems;
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {

        // console.log(event.target.value);        

        setSearchValue(event.target.value)

    }

    const shouldDisplayButton = searchValue.length > 0;

    const handleInputClear = () => {

        setSearchValue("")

    }

    const filteredProducts = products.filter((product) => {

        return product.includes(searchValue);

    })

    return(

        <SearchBar>

            <input type="text" value={searchValue} placeholder="search value" onChange={handleInputChange} />

            {shouldDisplayButton && <button onClick={handleInputClear}>clear</button>}


            <ul>

                {filteredProducts.map((product) => {

                    return (<li key={product}>{product}</li>)

                })}

            </ul>

 

        </SearchBar>

    )

    

}

 

export default TwonInfoSearchbar;



const SearchBar = styled.div`
    padding:5px;
    border:1px solid #efefef;
    margin:5px;
    li{
        text-align:left;
        text-decoration:none;
    }
`;