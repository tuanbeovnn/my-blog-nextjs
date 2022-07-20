import Link from "next/link";
import { connect } from "react-redux";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  .post {
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background-color: rgba(0, 0, 0, 0.75);
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 272px;
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-content {
        padding: 15px;
      }
    }
  }
`;
const PostFeatureItem = ({ item }) => {

    if (!item || !item.id) return null;
    // program to convert first letter of a string to uppercase
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
        <PostFeatureItemStyles>
            <PostImage
                url={item.thumnail}
                alt="unsplash"
            ></PostImage>
            <div className="post-overlay"></div>
            <div className="post-content">
                <div className="post-top">
                    {category?.id && <PostCategory>{capitalizeFirstLetter(category?.name.toLowerCase())}</PostCategory>}
                    <PostMeta authorName={capitalizeFirstLetter(item.createdBy)} date={dateToYMD(new Date(item.createdDate)) || ''}></PostMeta>
                </div>
                <Link href={`/post/${item.id}`}>
                    <a>
                        <PostTitle size="big">
                            {item.title}
                        </PostTitle>
                    </a>
                </Link>
            </div>
        </PostFeatureItemStyles>
    );
};


export default (connect(({ Admin: { posts, categories } }) => ({ posts, categories }))(PostFeatureItem));
