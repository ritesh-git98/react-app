import React from 'react';
import { filterData } from "./cardData";
export const filter = filterData.map((item) => (<div className="filter-icons"> {item.title}</div>))