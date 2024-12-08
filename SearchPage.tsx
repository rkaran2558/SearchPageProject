import React, { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  { id: 1, title: "React Basics", category: "Programming", content: "Learn React from scratch." },
  { id: 2, title: "Tailwind CSS Tips", category: "Design", content: "Improve your UI with Tailwind." },
  { id: 3, title: "JavaScript Tricks", category: "Programming", content: "Enhance your JavaScript skills." },
  { id: 4, title: "Web Development Trends", category: "Tech", content: "Stay updated on web trends." },
  { id: 5, title: "CSS for Beginners", category: "Design", content: "Learn CSS step by step." },
];

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 text-gray-800 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br  from-blue-500 via-purple-600 to-pink-500 opacity-20 rounded-lg blur-lg"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">Search Blog Posts</h1>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 text-gray-800 shadow-sm"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 text-gray-800 shadow-sm"
            >
              <option value="All">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Tech">Tech</option>
            </select>
          </div>

          {/* Results Display */}
          <div>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="border-b p-10 group hover:bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:text-white hover:rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <h2 className="text-lg font-semibold group-hover:text-white">{post.title}</h2>
                  <p className="text-sm text-gray-500 group-hover:text-gray-200 mb-1">{post.category}</p>
                  <p className="text-gray-700 group-hover:text-gray-200">{post.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No results found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
