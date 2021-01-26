import { useRouter } from "next/router";
import MyLayout from "../../components/MyLayout";
import fetch from 'isomorphic-unfetch';

const Post = props =>  (
        <MyLayout>
             <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={props.show.image} />
        </MyLayout>
    )

Post.getInitialProps = async function(context) {
    const {pid} = context.query;
    const res = await fetch(`http://api.tvmaze.com/shows/${pid}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show }
}

export default Post;