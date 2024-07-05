import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
import { useQuery} from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const { isLoading, error, data } = useQuery({
    queryKey: ["stories"],
    queryFn: () => makeRequest.get("/stories").then((res) => res.data),
  });


  console.log(data);

  // //TEMPORARY
  // const stories = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   },
  //   {
  //     id: 2,
  //     name: "John Doe",
  //     img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   },
  //   {
  //     id: 3,
  //     name: "John Doe",
  //     img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   },
  //   {
  //     id: 4,
  //     name: "John Doe",
  //     img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   },
  // ];

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {
      error? "Something went wrong"
      : isLoading ? "loading"
      : data.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          {/* <span>{story.name}</span> */}
        </div>
      ))}
    </div>
  )
}

export default Stories