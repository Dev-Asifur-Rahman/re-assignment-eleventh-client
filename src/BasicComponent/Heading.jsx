const Heading = ({head,body}) => {
  return (
    <div className="text-center w-full px-2 py-4 md:py-4 lg:py-6 text-library text-shadow-dark-library">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 uppercase">
        {head}
      </h1>
      <p className="text-base md:text-lg">
        {body}
      </p>
    </div>
  );
};

export default Heading;
