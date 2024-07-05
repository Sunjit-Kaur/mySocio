import Post from "../post/post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";


const Posts = ({userId}) => {

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get("/posts?userId="+userId).then((res) => res.data),
  });

  //  console.log(data);
  
  return <div className="posts">
    {error ? "Something went wrong! Logout and Login again.."
        : isLoading ? "loading"
        // : data.map((post) => <Post post={post} key={post.id} />)
        : Array.isArray(data) && data.length > 0
          ? data.map((post) => <Post post={post} key={post.id} />)
          : "No posts found"

        }
  </div>;


};

export default Posts;