import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostNewestLargeStyles = styled.div`
  .post {
    &-image {
      display: block;
      margin-bottom: 20px;
      height: 433px;
      border-radius: 16px;
    }
    &-category {
      margin-bottom: 10px;
    }
    &-title {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 1023.98px) {
      &-image {
        height: 250px;
      }
    }
  }
`;

const PostNewestLarge = ({ item }) => {
    if (!item || !item.id) return null;
    const capitalizeFirstLetter = (str) => {
        // converting first letter to uppercase
        return str.charAt(0).toUpperCase() + str.slice(1);;
    }
    const dateToYMD = (date) => {
        var strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var d = date.getDate();
        var m = strArray[date.getMonth()];
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + ' ' + m;
    }
    const { category } = item;
    return (
        <PostNewestLargeStyles>
            <PostImage
                url={item.thumnail}
                alt=""
            ></PostImage>

            {category?.id && <PostCategory>{capitalizeFirstLetter(category?.name.toLowerCase())}</PostCategory>}
            <PostTitle size="big">
                {item.title}
            </PostTitle>
            <PostMeta authorName={capitalizeFirstLetter(item.createdBy)} date={dateToYMD(new Date(item.createdDate)) || ''}></PostMeta>
        </PostNewestLargeStyles>
    );
};

export default PostNewestLarge;
