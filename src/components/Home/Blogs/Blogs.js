import Blog from "./Blog/Blog";
import "./Blogs.scss";

export default function Blogs(props) {
  const { blogs } = props;

  return <section className="section">
    <h2 className="section__title">Our Blogs</h2>
    <p className="section__subtitle">
      Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.
    </p>
    <grid className="blogs__grid">
    {
      blogs.map((blog, i) => <Blog data={blog} key={`blog-${i}`}/>)
    }
    </grid>
  </section>
}
