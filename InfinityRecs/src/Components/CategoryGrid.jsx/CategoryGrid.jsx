import React from 'react'

import { useState } from "react";

const categories = [
  "Music", "Movies", "Products", "Books",
  "Fitness & Health", "Travel & Tourism", "Gaming", "Education",
  "Events", "Food & Drink", "Fashion", "News",
  "Home Automation", "Jobs & Career", "Hobbies & Interests", "Sports & Fitness Gear"
];

const CategoryGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" flex flex-col items-center p-6">
      
      
      {/* Category Grid */}
      <div className="grid grid-cols-4 gap-6 w-3/4">
        {filteredCategories.map((category, index) => (
          <button 
            key={index} 
            className="bg-white shadow-md rounded-lg p-8 w-full h-40 flex flex-col items-center justify-center text-lg font-semibold text-gray-800 hover:bg-gray-100 transition duration-300"
          >
            <span className="text-4xl">{getEmoji(category)}</span>
            <span className="mt-3">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Function to return emojis based on categories
const getEmoji = (category) => {
  const emojiMap = {
    "Music": "🎵", "Movies": "🎬", "Products": "🛍️", "Books": "📚",
    "Fitness & Health": "💪", "Travel & Tourism": "✈️", "Gaming": "🎮", "Education": "🎓",
    "Events": "🎉", "Food & Drink": "🍔", "Fashion": "👗", "News": "📰",
    "Home Automation": "🏠", "Jobs & Career": "💼", "Hobbies & Interests": "🎨", "Sports & Fitness Gear": "⚽"
  };
  return emojiMap[category] || "❓";
};

export default CategoryGrid;

  