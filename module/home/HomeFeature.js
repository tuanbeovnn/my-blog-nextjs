import { connect } from "react-redux";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../../components/layout/Heading";
import FeatureSkeleton from "../../components/loading/FeatureSkeleton";
import PostFeatureItem from "../post/PostFeatureItem";

import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

const HomeFeatureStyles = styled.div`
  .movie-list .swiper-slide {
    width: 380px;
    height: auto;
  }
  .banner .swiper {
    height: 100%;
  }
`;

const HomeFeature = (props) => {
    const { trendingposts } = props;

    const isLoading = trendingposts == null && trendingposts.length <= 0;

    // if (trendingposts.length <= 0) return null;
    console.log("aaaaa")
    return (
        <HomeFeatureStyles className="home-block">
            <div className="container">
                <Heading>Features</Heading>
                {trendingposts.length <= 0 && (
                    <>
                        <div className="grid-layout">
                            <FeatureSkeleton></FeatureSkeleton>
                            <FeatureSkeleton></FeatureSkeleton>
                            <FeatureSkeleton></FeatureSkeleton>
                        </div>
                    </>
                )}
                {trendingposts.length > 0 && (
                    <div className="movie-list">
                        <Swiper
                            grabCursor={"true"}
                            spaceBetween={40}
                            slidesPerView={"auto"}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                              }}
                        >
                            {trendingposts &&
                                trendingposts.map((item) => {
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <PostFeatureItem item={item} />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                )}
            </div>
        </HomeFeatureStyles>
    );
};

export default connect(({ Admin: { newposts, trendingposts } }) => ({
    newposts,
    trendingposts,
}))(HomeFeature);
