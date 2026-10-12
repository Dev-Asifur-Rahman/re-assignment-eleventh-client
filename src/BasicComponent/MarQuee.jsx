import Marquee from "react-fast-marquee";

const MarQuee = () => {
  return (
    <Marquee className="bg-library/15 dark:bg-library/10" speed={40}>
      <p className="px-5 py-1 text-sm text-library font-medium">
        Student must return the book within 3 Days !
      </p>
    </Marquee>
  );
};

export default MarQuee;
