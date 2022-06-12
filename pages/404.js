import Link from 'next/link';
import React from 'react';
import styled from "styled-components";
import { Button } from '../components/button';
const NotFoundPageStyles = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${props => props.theme.secondary};;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 4px;
    font-weight: 500;
  }
`;
const NotFoundPage = () => {
    return (
        <NotFoundPageStyles>
            <Link href={"/"}>
                <img srcSet="/logo.png 2x" alt="monkey-blogging" className='logo'/>
            </Link>
            <h1 className='heading'>Oops! Page not found</h1>
            <Link href={"/"} >
                <Button>Back to home</Button>
            </Link>
        </NotFoundPageStyles>
    );
};

export default NotFoundPage;