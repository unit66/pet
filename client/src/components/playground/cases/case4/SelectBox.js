import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
      position: relative;
      width: 300px;
      background: white;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      font-size: 12px;
    `;
const StyledInput = styled.input`
      margin: 0;
      position: relative;
      border: none;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      outline: none;
      font-size: 12px;
    `;
const StyledOptions = styled.ul`
      display: ${props => props.showOptions ? "block" : "none"}
    `;
const StyledOption = styled.li`
      text-align: left;
      padding: 10px;
      cursor: pointer;
      &:hover{
        background-color: #84dcc6;
        color: white;
      }
      &.selected{
        background-color: #4b4e6d;
        color: white;
        font-weight: bold;
      }
    `;

const SelectBox = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [options, setOptions] = useState([
        {
            value: 'Qwe 1',
            selected: false
        },
        {
            value: 'Asd 2',
            selected: false
        },
        {
            value: 'Zxc 3',
            selected: false
        }
    ]);
    const [filteredOptions, setFilteredOptions] = useState(options);

    const toggleOptions = () => {
        setShowOptions(true);

        const removeListener = () => {
            setShowOptions(false);
            document.removeEventListener("click", () => {});
            document.removeEventListener("keyup", () => {});
        };

        document.addEventListener("click", e => {
            if(e.target.id === "CustomSelect"){
                setShowOptions(true);
            }else{
                removeListener();
            }
        });

        document.addEventListener("keyup", e => {
            if (e.key === "Enter") {
                removeListener();
            }
        });
    };
    const filterOptions = (query) => {
        const filter = query.target.value.toLowerCase();
        setFilteredOptions(options);
        if(filter.length > 0) {
            const newState = options.filter(option => option.value.toLowerCase().match(filter));
            setFilteredOptions(newState);
        }
    };
    const selectOption = (option) => {
        const newFilteredOptions = filteredOptions.map(option1 => {
            if(option1 === option){
                return {
                    value: option1.value,
                    selected: true
                }
            }
            return {
                value: option1.value,
                selected: false
            }
        });
        const newOptions = options.map(option1 => {
            if(option1 === option){
                return {
                    value: option1.value,
                    selected: true
                }
            }
            return {
                value: option1.value,
                selected: false
            }
        });
        setOptions(newOptions);
        setFilteredOptions(newFilteredOptions);
    };

    return (
        <StyledDiv>
            <StyledInput
                id="CustomSelect"
                type="text"
                onClick={toggleOptions}
                onChange={filterOptions}
                placeholder={
                    filteredOptions.find(option => option.selected) ? filteredOptions.find(option => option.selected).value : 'Choose or search an option...'
                }
            />
            <StyledOptions showOptions={showOptions}>
                { filteredOptions.map((option, index) =>
                    <StyledOption
                        className={option.selected ? 'selected' : ''}
                        key={index}
                        onClick={() => {selectOption(option)}}
                    >
                        {option.value}
                    </StyledOption>) }
            </StyledOptions>
            {showOptions}
        </StyledDiv>
    );
};

export default SelectBox;
