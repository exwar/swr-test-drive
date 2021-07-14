import { PostWrapper } from "./Posts.styles";

export const Post = ({ post }) => {
  return (
    <PostWrapper>
      <p>
        <strong>Title:</strong> {post.title}
      </p>
      <p>
        <strong>Body:</strong> {post.body}
      </p>
    </PostWrapper>
  );
};
