import React from "react";
import CategoryMarqueeCard from "./CategoryMarqueeCard";
import Marquee from "react-fast-marquee";

const CategoryMarquee = () => {
  const Category = [
    { id: 1, image: "https://i.ibb.co.com/5W83hCQ3/academyresize.png",
        name:'Novel',
        
     },
    {
      id: 2,
      image: "https://i.ibb.co.com/XrgNxZXY/biography-removebg-preview.png",
      name:'Thriller',
      
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/7Nv21DtK/download-removebg-preview.png",
      name:'History',
      
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/QFx49sGZ/fiction-removebg-preview.png",
      name:'Drama',
      
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/sdkqMMB7/history-removebg-preview.png",
      name:'Sci-Fi',
    },
    {
      id: 6,
      image: "https://i.ibb.co.com/xtJGKCZK/reference-removebg-preview.png",
      name:'Mystery',
      
    }
  ];

  return (
    <Marquee className="my-8" pauseOnHover={true}>
      <section className="flex gap-20 mr-20 items-center py-5">
        {Category.map((card) => (
          <CategoryMarqueeCard
            key={card.id}
            image={card.image}
            name={card.name}
          ></CategoryMarqueeCard>
        ))}
      </section>{" "}
    </Marquee>
  );
};

export default CategoryMarquee;
