const Heading = ({ head }) => {
  return (
    <div className="text-center w-full px-2 pt-4 md:pt-10 lg:pt-20 text-library shadow-effect">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase  ">
        {head}
      </h1>
      {/* <p className="text-base md:text-lg tracking-wider">{body}</p> */}
    </div>
  );
};

export default Heading;
