import Posts from "../../components/posts/posts"
import Stories from "../../components/stories/stories"
import Share from "../../components/share/SharePage"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home
