import { SyntheticEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  CreateCommentContainer,
  CreateCommentInput,
  CreateCommentBtn,
  CreateCommentForm,
} from "../ui/uiComponents";

interface CreateCommentProps {
  onAdd: (body: string) => void;
}

const CreateComment: React.FC<CreateCommentProps> = ({ onAdd }) => {
  const [body, setBody] = useState("");

  const handleAdd = (e: SyntheticEvent) => {
    e.preventDefault();

    if (body.trim()) {
      onAdd(body);
      setBody("");
    }
  };

  return (
    <CreateCommentContainer>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        whileTap={{ scale: 0.96 }}
      >
        <CreateCommentForm onSubmit={handleAdd}>
          <CreateCommentInput
            value={body}
            onChange={({ target }) => setBody(target.value)}
            type="text"
          />
          <CreateCommentBtn type="submit">Add</CreateCommentBtn>
        </CreateCommentForm>
      </motion.div>
    </CreateCommentContainer>
  );
};

export default CreateComment;
