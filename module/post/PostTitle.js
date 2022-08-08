import styled, { css } from "styled-components";
const PostTitleStyles = styled.h3`
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.25px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  
  a {
    display: block;
  }
  ${(props) =>
        props.size === "normal" &&
        css`
      font-size: 18px;
      @media screen and (max-width: 1023.98px) {
        font-size: 14px;
      }
    `};
  ${(props) =>
        props.size === "big" &&
        css`
      font-size: 22px;
      @media screen and (max-width: 1023.98px) {
        font-size: 16px;
      }
    `};
`;

const PostTitle = ({ children, className = "", size = "normal" }) => {
    return (
        <PostTitleStyles size={size} className={`post-title ${className}`}>
            {children}
        </PostTitleStyles>
    );
};

export default PostTitle;
