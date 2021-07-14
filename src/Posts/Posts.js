import useSWR, { mutate } from "swr";
import { Post } from "./Post";
import { PostsUI, Loader, Error } from "./Posts.styles";

const checkFetchStatus = (r) => {
  if (r.status >= 200 && r.status < 300) {
    return r;
  } else {
    var error = new Error(r.statusText);
    error.r = r;
    throw error;
  }
};

const fetcher = (url) =>
  fetch(url)
    .then(checkFetchStatus)
    .then((r) => r.json());

const Users = ({ countValue }) => {
  const urlKey = `https://jsonplaceholder.typicode.com/posts/${countValue}`;
  const { data, error } = useSWR(urlKey, fetcher);

  if (error) {
    return (
      <PostsUI>
        <Error>
          <img
            src="https://s.exwar.space/2021/07/undraw_warning_cyit.svg"
            alt="Error"
          />
          An error occured while fetching the post
        </Error>
      </PostsUI>
    );
  }

  if (!data) {
    return (
      <PostsUI>
        <Loader />
      </PostsUI>
    );
  }

  return (
    <PostsUI>
      <Post post={data} />
      <button
        onClick={() => {
          mutate(urlKey);
        }}
      >
        Revalidate {urlKey}
      </button>
    </PostsUI>
  );
};

export default Users;
