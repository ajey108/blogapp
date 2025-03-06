import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      console.log("Fetched Data:", response.data);
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="">
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-2 px-4 rounded-md" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-2 px-4 rounded-md"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Travel")}
          className={
            menu === "Travel" ? "bg-black text-white py-2 px-4 rounded-md" : ""
          }
        >
          Travel
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-2 px-4 rounded-md"
              : ""
          }
        >
          Lifestyle
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
                authorImg={item.authorImg}
                title={item.title}
                desc={item.desc}
                category={item.category}
              />
            ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
