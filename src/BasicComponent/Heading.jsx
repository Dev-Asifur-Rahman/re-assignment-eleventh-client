const Heading = ({ head }) => {
  return (
    <div className="text-center w-full px-2 py-4 md:py-4 lg:py-6 text-library shadow-effect">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 uppercase  ">
        {head}
      </h1>
      {/* <p className="text-base md:text-lg tracking-wider">{body}</p> */}
    </div>
  );
};

export default Heading;
