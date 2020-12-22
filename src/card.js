import { cardData } from "./cardData";
import React from 'react';

export const Card =  cardData.map( item => (
        <div className="card-container">
          <a href="./">
            <div className="card-img-container">
              <img
                className="card-image"
                src={item.thumbnail}
                alt={item.title}
              />
            </div>
            <div className="card-details">
              <h3 className="card-title">
                <div>
                  {item.title}
                  <wbr />
                </div>
              </h3>
              <p className="card-author">
                {item.author}
                <span className="card-date"> | {item.date}</span>
              </p>
              <div className="card-description">
                <div>
                  {item.description}
                  <wbr />
                  <span >...</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      )
      )