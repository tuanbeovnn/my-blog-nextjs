import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
import Layout from "../../components/layout/Layout";
const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  margin-bottom: 60px;
  .swiper-pagination-bullet{
    width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,15px));
    height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,15px));
    background-color:  ${(props) => props.theme.grayF3};
  }
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
      max-width: 600px;
      color: white;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    .banner {
      flex-direction: column;
      min-height: unset;
      &-heading {
        font-size: 30px;
        margin-bottom: 10px;
      }
      &-desc {
        font-size: 14px;
        margin-bottom: 20px;
      }
      &-image {
        margin-top: 25px;
      }
      &-button {
        font-size: 14px;
        height: auto;
        padding: 15px;
      }
    }
  }
`;

const HomeBanner = () => {
    return (
        <HomeBannerStyles>
            <div className="container">
                <Swiper grabCursor={"true"} slidesPerView={"auto"} pagination={{
                    dynamicBullets: true,
                }} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className="banner">
                            <div className="banner-content">
                                <h1 className="banner-heading">Monkey Blog</h1>
                                <p className="banner-desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                                    deserunt nobis suscipit eaque?
                                </p>
                                <Button href="/SignUp" kind="secondary" className="banner-button">
                                    Get started
                                </Button>
                            </div>
                            <div className="banner-image">
                                <img src="/img-banner.png" alt="banner" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner">
                            <div className="banner-content">
                                <h1 className="banner-heading">Monkey Blog</h1>
                                <p className="banner-desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                                    deserunt nobis suscipit eaque?
                                </p>
                                <Button href="/SignUp" kind="secondary" className="banner-button">
                                    Get started
                                </Button>
                            </div>
                            <div className="banner-image">
                                <img src="/img-banner.png" alt="banner" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner">
                            <div className="banner-content">
                                <h1 className="banner-heading">Monkey Blog</h1>
                                <p className="banner-desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                                    deserunt nobis suscipit eaque?
                                </p>
                                <Button href="/SignUp" kind="secondary" className="banner-button">
                                    Get started
                                </Button>
                            </div>
                            <div className="banner-image">
                                <img src="/img-banner.png" alt="banner" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

        </HomeBannerStyles>
    );
};

export default HomeBanner;
