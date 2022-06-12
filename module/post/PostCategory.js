import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

const PostCategoryStyled = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.gray6B};
  font-size: 14px;
  font-weight: 600;
  a{
    display:block;
  }
  background-color: #f3f3f3;
  ${(props) =>
        props.type === "primary" &&
        css`
      background-color: ${(props) => props.theme.grayF3};
    `};
  ${(props) =>
        props.type === "secondary" &&
        css`
      background-color: white;
    `};
`;
const PostCategory = ({ children, type = "primary", className = "", href = "/" }) => {
    return (
        <PostCategoryStyled type={type} className={`post-category ${className}`}>
            <Link href={href}>
                {children}
            </Link>
        </PostCategoryStyled>
    );
};

export default PostCategory;
