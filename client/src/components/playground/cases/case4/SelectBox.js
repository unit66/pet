import React, { useState } from 'react';
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
const StyledCheckBox = styled.input`
      position: absolute;
      z-index: -1;
      opacity: 0;
      &+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
        font-size: 12px;
        width: 100%;
        justify-content: flex-end;
      }
      &+label::after {
        content: '';
        display: inline-block;
        width: 1.2em;
        height: 1.2em;
        flex-shrink: 0;
        flex-grow: 0;
        border: none;
        background-color: white;
        border-radius: 0.25em;
        margin-left: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
      }
      &:checked+label::after {
        border-color: #84dcc6;
        background-color: #84dcc6;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      }
      &:not(:disabled):not(:checked)+label:hover::after {
        border-color: #84dcc6;
      }
      &:not(:disabled):active+label::after {
        background-color: #84dcc6;
        border-color: #84dcc6;
      }
      &:focus+label::after {
        box-shadow: none;
      }
      &:focus:not(:checked)+label::after {
        border-color: none;
      }
      &:disabled+label::after {
        background-color: #e9ecef;
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
    const [multiSelect, setMultiSelect] = useState(false);
    const [placeHolder, setPlaceHolder] = useState('Choose or search an option...');

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
            if(option1.value === option.value){
                return {
                    value: option1.value,
                    selected: !option1.selected
                }
            }
            return {
                value: option1.value,
                selected: multiSelect ? option1.selected : false
            }
        });
        const newOptions = options.map(option1 => {
            if(option1.value === option.value){
                return {
                    value: option1.value,
                    selected: !option1.selected
                }
            }
            return {
                value: option1.value,
                selected: multiSelect ? option1.selected : false
            }
        });
        setOptions(newOptions);
        setFilteredOptions(newFilteredOptions);

        const selectedOptions = newFilteredOptions.filter(option => option.selected);
        const selectedOptionsCount = selectedOptions.length;
        const placeholder = selectedOptionsCount > 0 ?
            selectedOptions.reduce((acc, option, index) => {
                if(option.selected) {
                    acc += selectedOptionsCount >= 2 && index < selectedOptionsCount - 1 ?
                        `${option.value}, `
                        : `${option.value}`;
                }
                return acc;
            }, '')
            : 'Choose or search an option...'
        setPlaceHolder(placeholder);
    };
    const toggleMultiSelect = () => {
        setMultiSelect(!multiSelect);
    };

    return (
        <div key={multiSelect}>
            <StyledCheckBox type="checkbox" id='multiselect' onChange={toggleMultiSelect} checked={multiSelect} />
            <label htmlFor="multiselect">MultiSelect</label>
            <StyledDiv>
                <StyledInput
                    id="CustomSelect"
                    type="text"
                    onClick={toggleOptions}
                    onChange={filterOptions}
                    placeholder={placeHolder}
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
        </div>
    );
};

export default SelectBox;
