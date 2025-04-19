import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //console.log("blogs from the homepage", blogs);

  //blogHomePage
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      //console.log("Fetched Data:", response.data);
      setBlogs(response.data.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading games ...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="">
      <div className="flex justify-center gap-6 my-10  ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-2 px-4 rounded-md" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("RPG")}
          className={
            menu === "RPG" ? "bg-black text-white py-2 px-4 rounded-md" : ""
          }
        >
          RPG
        </button>
        <button
          onClick={() => setMenu("FPS")}
          className={
            menu === "FPS" ? "bg-black text-white py-2 px-4 rounded-md" : ""
          }
        >
          FPS
        </button>
        <button
          onClick={() => setMenu("HORROR")}
          className={
            menu === "HORROR" ? "bg-black text-white py-2 px-4 rounded-md" : ""
          }
        >
          HORROR
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs && blogs.length > 0 ? (
          blogs
            .filter((item) => menu === "All" || item.category === menu) // Filtering by the selected category
            .map((item, index) => (
              <BlogItem
                id={item._id}
                key={index}
                image={item.image}
                author={item.author}
                authorImg={item.authorImg}
                title={item.title}
                desc={item.desc}
                category={item.category}
              />
            ))
        ) : (
          <p>No Games available</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
