import React from 'react';

function GiphysIndexItem({ giphy }) {
  return <li className="giphy-li">
      <div className="hover-wrapper">
        <img src={giphy.images.fixed_height.url} alt=""/>
        <div className="hover-inner">
          <p>
            user: {giphy.username} <br />
            rating: {giphy.rating}
          </p>
          <a href={giphy.source} rel="noopener noreferrer" target="_blank">
            source
          </a>
        </div>
      </div>
    </li>;
}

export default GiphysIndexItem;
