import { useForm } from 'react-hook-form'
import styled from "styled-components"
import Layout from '../components/layout/Layout'
import HomeBanner from '../module/home/HomeBanner'
import HomeFeature from '../module/home/HomeFeature'
import HomeNewest from '../module/home/HomeNewest'
const HomePageStyled = styled.div`

`
export default function Home() {
    const { control, watch, setValue } = useForm({
        mode: "onChange",
        defaultValues: {
            status: "",
            category: "",
        },
    });
    const watchStatus = watch("status");
    const watchCategory = watch("category");
    console.log("PostAddNew ~ watchCategory", watchCategory);
    return (
        <HomePageStyled>
            <Layout>
                <HomeBanner></HomeBanner>
                <HomeFeature></HomeFeature>
                <HomeNewest></HomeNewest>
            </Layout>
        </HomePageStyled>
    )
}
