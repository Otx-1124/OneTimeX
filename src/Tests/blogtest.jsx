import React from "react";

const blogData = [
  {
    id: 1,
    title: "How I Started OneTimeX",
    author: "Vishal Dubey, Founder & CEO – OneTimeX",
    content:
      "When I started OneTimeX in January 2024, I wasn’t just building a platform—I was solving a problem I personally experienced. I realized that unlisted shares and early-stage investments were practically inaccessible for retail investors like me.",
    slug: "/blogs/how-i-started-onetimex",
  },
  {
    id: 2,
    title: "Why I Believe Retail Investors Deserve Private Equity Access",
    author: "Vishal Dubey, Founder & CEO – OneTimeX",
    content:
      "India is witnessing a startup revolution, but the wealth generated often benefits only institutions. At OneTimeX, we believe retail investors deserve a fair share. Unlisted shares are powerful—but need transparency and accessibility.",
    slug: "/blogs/retail-investors-private-equity",
  },
  {
    id: 3,
    title: "The Truth About Unlisted Shares – Vishal Dubey Explains",
    author: "Vishal Dubey, Founder & CEO – OneTimeX",
    content:
      "There’s a lot of confusion about unlisted shares. Are returns guaranteed? Can you exit anytime? Vishal Dubey busts the common myths and shares what investors really need to know before entering the private market space.",
    slug: "/blogs/unlisted-shares-truth",
  },
];

const BlogSection = () => {
  return (
    <section className=" py-12 px-4 mt-10">
      <div className="max-w-7xl mx-auto container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Insights from Our Founder
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{blog.author}</p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                  {blog.content}
                </p>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
