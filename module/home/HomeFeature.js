import { connect } from "react-redux";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import FeatureSkeleton from "../../components/loading/FeatureSkeleton";
import MovieCardSkeleton from "../../components/loading/MovieCardSkeleton";
import PostFeatureItem from "../post/PostFeatureItem";
const HomeFeatureStyles = styled.div``;

const HomeFeature = (props) => {
    const { trendingposts } = props;

    const isLoading = trendingposts == null && trendingposts.length <= 0;
    console.log(isLoading)

    // if (trendingposts.length <= 0) return null;

    return (
        <HomeFeatureStyles className="home-block">
            <div className="container">
                <Heading>Features</Heading>
                {trendingposts.length <= 0 && (<>
                    <div className="grid-layout">
                        <FeatureSkeleton></FeatureSkeleton>
                        <FeatureSkeleton></FeatureSkeleton>
                        <FeatureSkeleton></FeatureSkeleton>
                    </div>
                </>)}
                {trendingposts.length > 0 && (
                    <div className="grid-layout">
                        {trendingposts && trendingposts.map((item) => {
                            return (
                                <PostFeatureItem item={item} key={item.id} />
                            )
                        })}
                    </div>
                )}

            </div>
        </HomeFeatureStyles>
    );
};

export default (connect(({ Admin: { newposts, trendingposts } }) => ({ newposts, trendingposts }))(HomeFeature));
