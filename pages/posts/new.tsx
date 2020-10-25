import { SyntheticEvent, useState } from "react";
import { motion } from "framer-motion";
import Axios from "axios";
import {
  TextField,
  CreateNewPostForm,
  SubmitBtn,
  PageTitle,
} from "../../components/ui/uiComponents";

const fieldAnimation = {
  regular: {
    scale: 1,
    zIndex: 1,
  },
  full: {
    scale: 1.3,
    zIndex: 20,
  },
};

const PostGeneratorPage = () => {
  const [post, setPost] = useState({ title: "", body: "" });
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (post.title.trim() && post.body.trim()) {
      Axios.post("https://simple-blog-api.crew.red/posts", post).catch(
        console.warn
      );
      setPost({ title: "", body: "" });
    }
  };

  return (
    <>
      <PageTitle>Lets create a new post</PageTitle>
      <CreateNewPostForm onSubmit={handleSubmit}>
        <motion.div
          variants={fieldAnimation}
          animate={activeField === "title" ? "full" : "regular"}
        >
          <TextField
            value={post.title}
            type="text"
            placeholder="Title"
            onChange={({ target }) =>
              setPost((prev) => ({ ...prev, title: target.value }))
            }
            onFocus={() => setActiveField("title")}
            onBlur={() => setActiveField(null)}
          />
        </motion.div>
        <motion.div
          variants={fieldAnimation}
          animate={activeField === "text" ? "full" : "regular"}
        >
          <TextField
            value={post.body}
            type="text"
            placeholder="Main text"
            onChange={({ target }) =>
              setPost((prev) => ({ ...prev, body: target.value }))
            }
            onFocus={() => setActiveField("text")}
            onBlur={() => setActiveField(null)}
          />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={{ stiffness: 100, type: "spring" }}
        >
          <SubmitBtn type="submit">Click</SubmitBtn>
        </motion.div>
      </CreateNewPostForm>
    </>
  );
};

export default PostGeneratorPage;
