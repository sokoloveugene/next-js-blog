import  { useRouter } from "next/router";
import {PostContainer, PostTitle, PostSubTitle} from "../ui/uiComponents"
import { motion } from "framer-motion";

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

const PostItem = ({ post }) => {
  const router = useRouter();

  const redirect = () => {
    if (/posts/.test(router.route)) {
      router.push(`${post.id}`);
    } else {
      router.push(`posts/${post.id}`);
    }
  };

  return (
    <motion.div
      onClick={redirect}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      whileTap={{ scale: 0.9 }}
      variants={item}
    >
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <PostSubTitle>{post.body}</PostSubTitle>
      </PostContainer>
    </motion.div>
  );
};

export default PostItem;
