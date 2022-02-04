import Head from 'next/head'
import styled from "styled-components";
import Link from "next/link";
import MyLayout from "../components/MyLayout";
import fetch from 'isomorphic-unfetch';
import InfoCard from "../components/common/InfoCard";


const Index = props => (
    <MyLayout>
        <InfoCard />
    </MyLayout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched, Count:' ${data.length}`)

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index;

const HomeBlock = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Mains = styled.div`
  min-height: 80vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
