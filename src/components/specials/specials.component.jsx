import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { specials } from "../../data/specials";
import FoodCard from "../food-card/food-card.component";

import "./specials.style.css";

const Specials = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={40}
        leftChevron={
          <button>
            <FontAwesomeIcon
              className="icon-scroll-left-rpl"
              icon={faChevronLeft}
            />
          </button>
        }
        rightChevron={
          <button>
            <FontAwesomeIcon
              className="icon-scroll-right-rpl"
              icon={faChevronRight}
            />
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop={true}
      >
        {specials.map((dishItem) => (
          <FoodCard key={dishItem.id} {...dishItem} />
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default Specials;
