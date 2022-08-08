import Link from "next/link";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      border-radius: 16px;
    }
    &-category {
      margin-bottom: 10px;
    }
    &-title {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-image {
        aspect-ratio: 16/9;
        height: auto;
      }
    }
  }
`;

const PostItem = ({ item }) => {
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
        <PostItemStyles>
            <PostImage
                url={item.thumnail}
                alt=""
                to="/"
            ></PostImage>
            {category?.id && <PostCategory>{capitalizeFirstLetter(category?.name.toLowerCase())}</PostCategory>}
            <Link href={`/post/${item.id}`}>
                <a>
                    <PostTitle size="big">
                        {item.title}
                    </PostTitle>
                </a>
            </Link>
            <PostMeta authorName={capitalizeFirstLetter(item.createdBy)} date={dateToYMD(new Date(item.createdDate)) || ''}></PostMeta>
        </PostItemStyles>
    );
};

export default PostItem;
