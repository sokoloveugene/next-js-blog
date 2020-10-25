import { CommentsContainer, List, ListItem } from "../ui/uiComponents";
import { Comment } from "../../interfaces";

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  if (comments.length > 0) {
    return (
      <CommentsContainer>
        <List>
          {comments.map((comment) => (
            <ListItem key={comment?.id}>{comment?.body}</ListItem>
          ))}
        </List>
      </CommentsContainer>
    );
  } else {
    return <CommentsContainer />;
  }
};

export default Comments;
