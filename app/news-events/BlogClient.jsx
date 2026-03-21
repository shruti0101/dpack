"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";

async function getBlogs() {
  return client.fetch(
    `*[_type == "blog"] | order(date desc){
      title,
      slug,
      date,
      excerpt,
      "imageUrl": image.asset->url
    }`
  );
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('/whychoosebg.webp')" }}
        className="w-full bg-cover  h-[40vh] md:h-[80vh] relative"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col  justify-center">
          <h2 className="text-white mt-10 px-3 text-start md:text-center text-2xl md:text-6xl font-bold z-10 ">
            News and Events
          </h2>
          <p className="hidden md:block text-white  text-sm md:text-lg mt-4 max-w-2xl mx-auto text-center leading-relaxed">
            From international exhibitions to product launches, we’re making
            strides around the world. Discover how Salford continues to redefine
            excellence through every event and achievement.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, visibleCount).map((b) => (
            <article
              key={b.slug?.current || b.title}
              className="bg-white border rounded-lg shadow"
            >
              {b.imageUrl && (
                <Image
                  src={b.imageUrl}
                  alt={b.title}
                  width={1200}
                  height={600}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{b.title}</h2>
                <p className="text-sm text-gray-500 mb-3">
                  {b.date
                    ? new Date(b.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "No date"}
                </p>

                <p className="text-gray-700 text-sm">{b.excerpt}</p>
                <Link
                  href={`/news-events/${b.slug.current}`}
                  className="text-blue-600 font-medium hover:underline mt-3 block"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ✅ Load More Button */}
        {visibleCount < blogs.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)} // load +6 blogs each click
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
