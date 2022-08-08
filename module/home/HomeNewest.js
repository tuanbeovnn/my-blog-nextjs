
import { connect } from "react-redux";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import PostNewestItem from "../post/PostNewestItem";
import PostNewestLarge from "../post/PostNewestLarge";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from 'swiper';
import PostItem from "../post/PostItem";
SwiperCore.use([Autoplay]);
const HomeNewestStyles = styled.div`
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 40px;
    align-items: start;
  }
  .sidebar {
    padding: 28px 20px;
    background-color: #f3edff;
    border-radius: 16px;
  }
  .newest-list .swiper-slide {
    width: 275px;
    height: auto;
  }
  .banner .swiper {
    height: 100%;
  }

  @media screen and (max-width: 1023.98px) {
    .layout {
      grid-template-columns: 100%;
    }
    .sidebar {
      padding: 14px 10px;
    }
  }
`;

const HomeNewest = (props) => {

    const { newposts, newpostsRemaining } = props;
    const [firstPost, ...posts] = newposts;

    return (
        <HomeNewestStyles className="home-block">
            <div className="container">
                <Heading>Newest</Heading>
                <div className="layout">
                    <PostNewestLarge item={firstPost}></PostNewestLarge>
                    <div className="sidebar">
                        {posts.map((item) => {
                            return (
                                <PostNewestItem key={item.id} item={item}></PostNewestItem>
                            )
                        })}
                    </div>
                </div>
                {/* <div className="grid-layout grid-layout--primary">
                    {newpostsRemaining && newpostsRemaining.map((item) => {
                        return (
                            <PostItem key={item.id} item={item}></PostItem>
                        )
                    })}
                </div> */}
                <div className="newest-list">
                    <Swiper
                        grabCursor={"true"}
                        spaceBetween={40}
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                    >
                        {newpostsRemaining && newpostsRemaining.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <PostItem key={item.id} item={item}></PostItem>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </HomeNewestStyles>
    );
};

export default (connect(({ Admin: { newposts, trendingposts, newpostsRemaining } }) => ({ newposts, trendingposts, newpostsRemaining }))(HomeNewest));