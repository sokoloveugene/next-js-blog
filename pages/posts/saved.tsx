import Axios from "axios";
import PostItem from "../../components/PostItem/PostItem";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { getSavedPosts, IState } from "../../redux/Selectors";
import { PageTitle } from "../../components/ui/uiComponents";
import { Post } from "../../interfaces";

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

interface SavedProps {
  data: Post[];
  myPosts: number[];
}
const Saved: React.FC<SavedProps> = ({ data, myPosts }) => {
  const filterderPosts = data.filter((d) => myPosts.includes(d.id));

  if (filterderPosts.length === 0) {
    return <PageTitle>No saved posts</PageTitle>;
  }

  return (
    <div>
      <main>
        <motion.ul initial="hidden" animate="visible" variants={list}>
          {filterderPosts.map((item) => (
            <PostItem key={item.id} post={item} />
          ))}
        </motion.ul>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const axiosData = await Axios.get("https://simple-blog-api.crew.red/posts");
  const data = axiosData?.data.reverse();

  return {
    props: { data },
  };
}

const mapStateToProps = (state: IState) => ({
  myPosts: getSavedPosts(state),
});

export default connect(mapStateToProps)(Saved);
