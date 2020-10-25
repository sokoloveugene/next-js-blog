import Axios from "axios";
import Head from "next/head";
import PostItem from "../components/PostItem/PostItem";
import { motion } from "framer-motion";
import { Post } from "../interfaces";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

interface HomeProps {
  data: Post[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Latest Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.ul initial="hidden" animate="visible" variants={list}>
          {data.map((item) => (
            <PostItem key={item.id} post={item} />
          ))}
        </motion.ul>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const axiosData = await Axios.get("https://simple-blog-api.crew.red/posts");
  const data = axiosData?.data.reverse();

  return {
    props: { data },
  };
}

export default Home;
