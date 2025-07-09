const Heading = ({head,body}) => {
  return (
    <div className="text-center w-full px-2 py-4 md:py-4 lg:py-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {head}
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-600">
        {body}
      </p>
    </div>
  );
};

export default Heading;
