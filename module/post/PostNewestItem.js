import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostNewestItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .post {
    &-image {
      display: block;
      flex-shrink: 0;
      width: 180px;
      height: 130px;
      border-radius: 12px;
    }
    &-category {
      margin-bottom: 8px;
    }
    &-content {
      flex: 1;
    }

    &-title {
      margin-bottom: 8px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    margin-bottom: 14px;
    padding-bottom: 14px;
    .post {
      &-image {
        width: 140px;
        height: 100px;
      }
    }
  }
`;
const PostNewestItem = ({ item }) => {
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
        <PostNewestItemStyles>
            <PostImage
                url={item.thumnail}
                alt=""
                to="/"
            ></PostImage>

            <div className="post-content">
                {category?.id && <PostCategory>{capitalizeFirstLetter(category?.name.toLowerCase())}</PostCategory>}
                <PostTitle>
                    {item.title}
                </PostTitle>
                <PostMeta authorName={capitalizeFirstLetter(item.createdBy)} date={dateToYMD(new Date(item.createdDate)) || ''}></PostMeta>
            </div>
        </PostNewestItemStyles>
    );
};

export default PostNewestItem;
