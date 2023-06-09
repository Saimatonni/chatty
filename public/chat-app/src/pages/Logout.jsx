import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";

function Logout() {
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.clear();
        navigate("/login");
    };
    return (
        <Button onClick={handleClick}>
            <BiPowerOff />
        </Button>
    )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #AEDCFF;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #003C69;
  }
`;

export default Logout
