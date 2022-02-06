import Head from 'next/head'
import styled from "styled-components";
import Link from "next/link";
import MyLayout from "../components/MyLayout";
import fetch from 'isomorphic-unfetch';
import InfoCard from "../components/common/InfoCard";
import {Table} from "@mui/material";
import React from "react";


const Index = () => {
    const infoData = [
        { num: 1, filedName: 'email', label: '이메일', content: 'yerinko@test.com'},
        { num: 2, filedName: 'email', label: '이메일', content: 'yerinko@test.com'}
    ]
    return (
        <MyLayout>
            <InfoCard title="기본 정보" button="수정">
                { infoData.map((data) => (
                    <>
                        {data.num}
                    </>
                    // <TableRow key={data.num}>
                    //     <TableCell component="th" scope="row">{data.label}</TableCell>
                    //     <TableCell align="left">{data.content}</TableCell>
                    // </TableRow>
                ))}
            </InfoCard>
        </MyLayout>
        )
}


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
