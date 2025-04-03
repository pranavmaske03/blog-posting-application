import React, { useState } from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/post/${$id}`} className="block">
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="w-full justify-center mb-4 relative">
          {!imageLoaded && (
            <div className="w-full h-48 bg-gray-300 rounded-xl animate-pulse"></div>
          )}
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className={`rounded-xl w-full h-48 object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
