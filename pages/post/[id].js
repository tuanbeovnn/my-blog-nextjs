import { useRouter } from 'next/router';
import { connect } from "react-redux";
import styled from "styled-components";
import Heading from '../../components/layout/Heading';
import Layout from '../../components/layout/Layout';
import PostCategory from '../../module/post/PostCategory';
import PostImage from '../../module/post/PostImage';
import PostItem from '../../module/post/PostItem';
import PostMeta from '../../module/post/PostMeta';
import PostTitle from '../../module/post/PostTitle';
import wrapper from "../../redux/configureStore";
import { AxiosService } from '../../utils';
import NotFoundPage from '../404';
const PostDetailsPageStyles = styled.div`
  padding-bottom: 100px;
  .post {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
      margin: 40px 0;
    }
    &-feature {
      width: 100%;
      max-width: 640px;
      height: 466px;
      border-radius: 20px;
    }
    &-heading {
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 16px;
    }
    &-info {
      flex: 1;
    }
    &-content {
      max-width: 700px;
      margin: 80px auto;
    }
    &-comment {
        margin: 80px auto;
    }
  }
  .author {
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    border-radius: 20px;
    background-color: ${(props) => props.theme.grayF3};
    &-image {
      width: 200px;
      height: 200px;
      flex-shrink: 0;
      border-radius: inherit;
    }
    &-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    &-content {
      flex: 1;
      padding: 20px;
    }
    &-name {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 20px;
    }
    &-desc {
      font-size: 14px;
      line-height: 2;
    }
  }
  @media screen and (max-width: 1023.98px) {
    padding-bottom: 40px;
    .post {
      &-header {
        flex-direction: column;
      }
      &-feature {
        height: auto;
      }
      &-heading {
        font-size: 26px;
      }
      &-content {
        margin: 40px 0;
      }
    }
    .author {
      flex-direction: column;
      &-image {
        width: 100%;
        height: auto;
      }
    }
  }
`;

const PostDetailsPage = (props) => {

    const router = useRouter()
    const { post } = props;
    if (!post && !post?.id) return <NotFoundPage />;
    return (
        <PostDetailsPageStyles>
            <Layout>
                <div className="container">
                    <div className="post-header">
                        <PostImage
                            url="https://images.unsplash.com/photo-1649837867356-6c7ef7057f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                            className="post-feature"
                        ></PostImage>
                        <div className="post-info">
                            <PostCategory className="mb-6">Kiến thức</PostCategory>
                            <h1 className="post-heading">
                                Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                            </h1>
                            <PostMeta></PostMeta>
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="entry-content">
                            <h2>Chương 1</h2>
                            <p>
                                Gastronomy atmosphere set aside. Slice butternut cooking home.
                                Delicious romantic undisturbed raw platter will meld. Thick
                                Skewers skillet natural, smoker soy sauce wait roux. slices Food
                                qualities braise chicken cuts bowl through slices butternut
                                snack. Tender meat juicy dinners. One-pot low heat plenty of
                                time adobo fat raw soften fruit. sweet renders bone-in marrow
                                richness kitchen, fricassee basted pork shoulder. Delicious
                                butternut squash hunk. Flavor centerpiece plate, delicious ribs
                                bone-in meat, excess chef end. sweet effortlessly pork, low heat
                                smoker soy sauce flavor meat, rice fruit fruit. Romantic
                                fall-off-the-bone butternut chuck rice burgers. renders aromatic
                                enjoyment, then slices taco. Minutes undisturbed cuisine lunch
                                magnificent mustard curry. Juicy share baking sheet pork. Meals
                                ramen rarities selection, raw pastries richness magnificent
                                atmosphere. Sweet soften dinners, cover mustard infused skillet,
                                Skewers on culinary experience.
                            </p>

                            <p>
                                Juicy meatballs brisket slammin baked shoulder. Juicy smoker
                                soy sauce burgers brisket. polenta mustard hunk greens. Wine
                                technique snack skewers chuck excess. Oil heat slowly. slices
                                natural delicious, set aside magic tbsp skillet, bay leaves
                                brown centerpiece. fruit soften edges frond slices onion snack
                                pork steem on wines excess technique cup; Cover smoker soy sauce
                                fruit snack. Sweet one-dozen scrape delicious, non sheet raw
                                crunch mustard. Minutes clever slotted tongs scrape, brown steem
                                undisturbed rice.
                            </p>

                            <p>
                                Food qualities braise chicken cuts bowl through slices butternut
                                snack. Tender meat juicy dinners. One-pot low heat plenty of
                                time adobo fat raw soften fruit. sweet renders bone-in marrow
                                richness kitchen, fricassee basted pork shoulder. Delicious
                                butternut squash hunk. Flavor centerpiece plate, delicious ribs
                                bone-in meat, excess chef end. sweet effortlessly pork, low heat
                                smoker soy sauce flavor meat, rice fruit fruit. Romantic
                                fall-off-the-bone butternut chuck rice burgers.
                            </p>
                            <figure>
                                <img
                                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                                    alt=""
                                />
                                <figcaption>
                                    Gastronomy atmosphere set aside. Slice butternut cooking home.
                                </figcaption>
                            </figure>
                            <h2>Chương 2</h2>
                            <p>
                                Gastronomy atmosphere set aside. Slice butternut cooking home.
                                Delicious romantic undisturbed raw platter will meld. Thick
                                Skewers skillet natural, smoker soy sauce wait roux. slices Food
                                qualities braise chicken cuts bowl through slices butternut
                                snack. Tender meat juicy dinners. One-pot low heat plenty of
                                time adobo fat raw soften fruit. sweet renders bone-in marrow
                                richness kitchen, fricassee basted pork shoulder. Delicious
                                butternut squash hunk. Flavor centerpiece plate, delicious ribs
                                bone-in meat, excess chef end. sweet effortlessly pork, low heat
                                smoker soy sauce flavor meat, rice fruit fruit. Romantic
                                fall-off-the-bone butternut chuck rice burgers. renders aromatic
                                enjoyment, then slices taco. Minutes undisturbed cuisine lunch
                                magnificent mustard curry. Juicy share baking sheet pork. Meals
                                ramen rarities selection, raw pastries richness magnificent
                                atmosphere. Sweet soften dinners, cover mustard infused skillet,
                                Skewers on culinary experience.
                            </p>
                        </div>
                        <div className="author">
                            <div className="author-image">
                                <img
                                    src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="author-content">
                                <h3 className="author-name">Evondev</h3>
                                <p className="author-desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Dignissimos non animi porro voluptates quibusdam optio nulla
                                    quis nihil ipsa error delectus temporibus nesciunt, nam
                                    officiis adipisci suscipit voluptate eum totam!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="post-related">
                        <Heading>Related</Heading>
                        <div className="grid-layout grid-layout--primary">
                            <a>ddd</a>
                            <a>ddd</a>
                            <a>ddd</a>
                            <a>ddd</a>
                            {/* <PostItem></PostItem>
                            <PostItem></PostItem>
                            <PostItem></PostItem>
                            <PostItem></PostItem> */}
                        </div>
                    </div>

                    <div className='post-comment'>
                        <Heading>Comments</Heading>
                        <div className="flex justify-center items-center">
                            <div className="h-80 px-7 w-[700px] rounded-[12px] bg-[#1DC071] p-4">
                                <p className="text-xl font-semibold text-white transition-all">Add Comment/Questions</p>
                                <textarea className="h-40 px-3 text-sm py-1 mt-5 outline-none border-pink-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here" defaultValue={""} />
                                <div className="flex justify-between mt-2">
                                    <button className="h-12 w-[150px] bg-white text-sm text-[#1DC071] rounded-lg transition-all cursor-pointe">Submit comment
                                    </button>
                                    <p className="text-sm text-white ">Enter atleast 15 characters</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </Layout>
        </PostDetailsPageStyles>
    );
};


export const getServerSideProps = wrapper.getServerSideProps(async ({ store, ...props }) => {

    try {
        const res = await AxiosService.get(`/posts/${props.query.id}`);
        return {
            props: {
                id: props.query?.id,
                post: res.data.details
            }, // will be passed to the page component as props
        }
    } catch (e) {
        return {
            props: {
                id: props.query?.id,
            }
        }
    }
})


export default connect((store) => ({ postDetails: store.Admin.postDetails, user: store.Admin.user, store }))(PostDetailsPage);