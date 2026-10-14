import { Link } from "react-router";

const CategoryMarqueeCard = ({ image, name, description }) => {
  return (
    <div className="card card-border shadow-lg w-96 marqueeCategoryCard flex flex-row items-center dark:border dark:border-library">
      <div className="w-3/5 flex flex-col justify-evenly h-full pl-5">
        <h2 className="card-title uppercase font-bold text-library">{name}</h2>
        <p className="line-clamp-3 font-sans">
          {description}
        </p>

        <button className="btn btn-sm text-library border-0 bg-library/20 dark:bg-library/5 outline outline-library outline-offset-0 btn-wide w-fit rounded-sm">
          Buy Now
        </button>
      </div>
      <div className="w-2/5  h-full flex justify-center items-center">
        <div className="rounded-full border border-library bg-library/10 w-32 aspect-square flex justify-center items-center">
          <img
            src={image}
            alt=""
            className="w-30 aspect-square rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

{
  /* <div
      style={{ backgroundImage: `url(${image})` }}
      className=" flex border-2 shadow-xl justify-center items-end shrink-0 hover:scale-105 marqueeCategoryCard transition-all duration-300 ease-in-out"
    >
      <div className=" p-5 flex flex-col justify-between w-full h-full">
        <h2 className=" w-fit py-1 px-3 bg-white/10 border font-bold text-sm rounded-[8px]">
          {name}
        </h2>
        <Link to={`/allbooks/${name}`}>
          <button className="btn btn-sm btn-outline hover:bg-[#f7f5f3] hover:text-black dark:hover:bg-white dark:hover:text-black">See More</button>
        </Link>
      </div>
    </div> */
}

export default CategoryMarqueeCard;
