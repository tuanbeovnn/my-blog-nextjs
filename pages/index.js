import { useForm } from 'react-hook-form'
import { connect } from "react-redux"
import styled from "styled-components"
import Layout from '../components/layout/Layout'
import HomeBanner from '../module/home/HomeBanner'
import HomeFeature from '../module/home/HomeFeature'
import HomeNewest from '../module/home/HomeNewest'
import { getServerSideProps } from "./../utils/getServerSideProps"
const HomePageStyled = styled.div`

`

const Home = () => {
    const { control, watch, setValue } = useForm({
        mode: "onChange",
        defaultValues: {
            status: "",
            category: "",
        },
    });
    const watchStatus = watch("status");
    const watchCategory = watch("category");
    return (
        <HomePageStyled>
        <Layout>
            <HomeBanner></HomeBanner>
            <HomeFeature></HomeFeature>
            <HomeNewest></HomeNewest>
        </Layout>
    </HomePageStyled>
    );
};

export { getServerSideProps };
export default connect((store) => ({ categories: store.Admin.categories, user: store.Admin.user, store }))(Home);

// export default (Home);
