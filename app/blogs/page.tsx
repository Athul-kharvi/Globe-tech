// app/blogs/page.tsx

import React from "react";
import Link from "next/link";
import CustomHeader from "../components/customHeader";

const blogList = [
  {
    id: 1,
    title:
      "Advancing Precision: How Fortune Indo Corp Leads the Future of CNC Machining in India",
    date: "April 10, 2025",
    summary:
      "The manufacturing world is undergoing a revolution—fueled by automation, data-driven systems, and an unrelenting demand for speed, accuracy, and customization. At the heart of this transformation lies CNC machining, a technology that continues to shape the future of precision manufacturing.",
    image: "/image/advance-prec.webp",
  },
  {
    id: 2,
    title:
      "The Importance of Heat Treatment in Manufacturing: How Fortune Indo Corp Delivers Enhanced Performance and Durability",
    date: "April 5, 2025",
    summary:
      "In the world of modern manufacturing, precision and performance are non-negotiable. Whether it's an engine part, a transmission gear, or a structural support component, it’s not just about shaping the metal—it’s about enhancing its internal properties to perform under stress, heat, and wear.",
    image: "/image/heat-treating.webp",
  },
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <CustomHeader />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Our Blogs</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {blogList.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-2">
                <h2 className="text-2xl font-semibold font-inter">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500">{blog.date}</p>
                <p className="text-gray-700 font-ftregolaneue">
                  {blog.summary}
                </p>
                <Link href={`/blogs/${blog.id}`}>
                  <button className="mt-4 px-4 py-2 bg-zinc-900 text-white rounded-2xl hover:bg-orange-400 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
