import Axios from "axios";
import { useRouter } from "next/router";
import SinglePostItem from "../../components/SinglePostItem/SinglePostItem";
import Comments from "../../components/Comments/Comments";
import CreateComment from "../../components/CreateComment/CreateComment";
import { useState } from "react";
import { Post, Comment } from "../../interfaces";

interface PostWithIdProps {
  data: Post[];
  requiredComments: Comment[];
}

const PostWithId: React.FC<PostWithIdProps> = ({ data, requiredComments }) => {
  const { query } = useRouter();
  const { postId } = query;
  const [comments, setComments] = useState(requiredComments.reverse());
  
  const handleCreate = (body) => {
    Axios.post("https://simple-blog-api.crew.red/comments", {
      postId,
      body,
    })
      .then((res) => res.data)
      .then((data) => setComments((prev) => [data, ...prev]))
      .catch(console.warn);
  };

  return (
    <>
      <SinglePostItem {...data} />
      <CreateComment onAdd={handleCreate} />
      <Comments comments={comments} />
    </>
  );
};

export default PostWithId;

// export async function getServerSideProps(context) {
//   const res = await Axios.get(
//     `https://simple-blog-api.crew.red/posts/${context.params.postId}?_embed=comments`
//   );
//   const data = res?.data;

// const commentsResponse = Axios.get(
//   "https://simple-blog-api.crew.red/comments"
// );
// const requiredComments = (await commentsResponse).data
//   ?.reverse()
//   .filter((item) => item.postId === context.query.postId);
//   return { props: { data, requiredComments } };
// }

export async function getStaticProps(context) {
  const res = await Axios.get(
    `https://simple-blog-api.crew.red/posts/${context.params.postId}?_embed=comments`
  );
  const data = await res.data;

  const commentsResponse = await Axios.get(
    "https://simple-blog-api.crew.red/comments"
  );

  const requiredComments = (await commentsResponse).data
    ?.reverse()
    .filter((item) => item.postId === context.params.postId);

  return {
    props: {
      data,
      requiredComments,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await Axios.get(
    `https://simple-blog-api.crew.red/posts/?_embed=comments`
  );
  const posts = await res.data;

  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
