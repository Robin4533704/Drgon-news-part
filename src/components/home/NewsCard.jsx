import { FaStar, FaEye } from "react-icons/fa";
import moment from "moment";
import { CiShare2, CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl">
      {/* Author Info */}
      <div className="card-body pb-2 pt-4 bg-[#F3F3F3]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="text-sm font-semibold">{author.name}</h2>
              <p className="text-xs text-gray-500">
                {moment(author.published_date).format("MMM D, YYYY")}
              </p>
            </div>
           
          </div> 
              <button className="text-gray-800 font-bold flex gap-2 text-xl items-center"> <CiBookmark /><CiShare2 />
          </button>
        
        </div>
      </div>
      <h2 className="card-title text-3xl mt-6 mb-6 mr-10">{title}</h2>
      {/* Image & Content */}
      <figure>
        <img
         alt=""
          src={thumbnail_url}
         
          className="w-full h-60 object-cover rounded-xl"
        />
      </figure>

      <div className="card-body pt-4">
       
        <p className="text-sm text-gray-400">
          {details.length > 150 ? `${details.slice(0, 150)}...` : details}
          <span className="text-primary text-yellow-400 cursor-pointer">Read More</span>
        </p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm mt-4">
          <div className="flex items-center gap-1 text-warning">
            <FaStar />
            <span>{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view.toLocaleString()} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
