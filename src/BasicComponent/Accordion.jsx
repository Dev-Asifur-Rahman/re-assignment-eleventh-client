import Lottie from "lottie-react";
import lottieOne from "../../public/Lottie/accordionone.json";
import lottieTwo from "../../public/Lottie/accordiontwo.json";
import lottieThree from "../../public/Lottie/accordionthree.json";
import lottieFour from "../../public/Lottie/accordionfour.json";

const Accordion = () => {
  const lottieObject = [
    {
      image: lottieOne,
      question: "How do I create an account?",
      answer:
        'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
      image: lottieTwo,
      question: " How can I borrow a book from LitHub?",
      answer:
        "To borrow a book, simply log in to your account, browse the book you want, and click on the Borrow button. If the book is available, it will be added to your borrowed list instantly.",
    },
    {
      image: lottieThree,
      question: " How do I know if a book is popular or highly rated?",
      answer:
        "You can check the average rating and number of reviews displayed on each book card. Popular books also appear in the Top Rated or Trending sections on the homepage.",
    },
    {
      image: lottieFour,
      question: "Is there a limit to how many books I can borrow at once?",
      answer:
        "Yes, to ensure fair access, each user can borrow up to 3 books at a time. Once you return a book, you can borrow another immediately.",
    },
  ];
  return (
    <div className="space-y-4 my-6">
      {lottieObject.map((lottie, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          } ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center px-5`}
        >
          <div className="w-full md:w-1/2 lg:px-16 lg:w-1/2 ">
            <div className="collapse collapse-arrow bg-base-100 border-base-300 rounded-xl shadow-md p-4">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">
                {lottie?.question}
              </div>
              <div className="collapse-content text-sm">{lottie?.answer}</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <Lottie
              animationData={lottie?.image}
              className="w-full h-[150px] md:h-[250px] "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
