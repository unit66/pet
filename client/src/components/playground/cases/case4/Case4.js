import React from 'react';
import SelectBox from "./SelectBox";
import styled from "styled-components";

const StyledSection = styled.section`
  align-self: self-start;
`;

const Case4 = () => {
    return (
        <li className="case case1">
            <h1>Case 1: <span className="teal">Custom Select</span></h1>
            <StyledSection>
                <SelectBox />
            </StyledSection>
            <section className="tags">
                #html5 #css3 #react
            </section>
        </li>
    );
};

export default Case4;
