import React from "react";

const VideoDetail = ({ title, description, id }) => {
  return (
    <div>
      <div className="ui embed">
        <iframe src={`https://www.youtube.com/embed/${id}`} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
