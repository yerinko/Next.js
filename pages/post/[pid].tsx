import { useRouter } from "next/router";
import MyLayout from "../../components/MyLayout";
import styled from "styled-components";
import fetch from 'isomorphic-unfetch';

const Post = props =>  {
    return (
        <MyLayout>
             <h1>{props.show.name}</h1>
            <Markdown>
                <div className="markdown">
                    <h3>{props.show.summary}</h3>
                    <a>{props.show.url}</a>
                    <img src={props.show.image} />
                </div>
            </Markdown>
        </MyLayout>
    )
}

Post.getInitialProps = async function(context) {
    const {pid} = context.query;
    const res = await fetch(`http://api.tvmaze.com/shows/${pid}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show }
}

export default Post;

const Markdown = styled.div`
      .markdown {
            font-family:'Arial';
            }
            .markdown a {
            text-decoration: none;
            color: #866ecc;
            }
            .markdown a:hover {
            opacity:0.6;
            }
            .markdown h3 {
            margin:0;
            padding:0;
            text-transform: uppercase;
            }
    `