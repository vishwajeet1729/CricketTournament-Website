import { useState } from "react";

const NextDestination = () => {
  const [showFullParagraph, setShowFullParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowFullParagraph(!showFullParagraph);
  };

  const paragraph =
    " Welcome to VIRATIAN, where cricket comes alive! We are dedicated to creating unforgettable cricket tournaments that bring together players, teams, and fans. Our mission is to foster a competitive spirit while promoting sportsmanship and teamwork. With top-notch facilities and meticulously organized events, we provide the perfect platform for cricketers of all levels to showcase their skills. Join us in celebrating the passion for cricket and experience the excitement of the game like never before. At VIRATIAN, your journey towards cricket excellence begins here!";
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-400 ">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Your the
                <br />
                next MAN{" "}
                <span className="inline-block text-purple-600">
                  OF the MAtch
                </span>
              </h2>
              <p className={`text-base text-gray-700 md:text-lg `}>
                {showFullParagraph ? paragraph : paragraph.slice(0, 205)}
              </p>
            </div>

            <button
              onClick={toggleParagraph}
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              {showFullParagraph ? "Read less" : "Read more"}
              <svg
                className={`inline-block w-3 ml-2 ${
                  showFullParagraph ? "transform rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://media.gettyimages.com/id/637296848/photo/athlete-holding-trophy-cup-above-head-in-stadium.jpg?s=612x612&w=0&k=20&c=TpzGxBtkb-5dxt-ybcgNo1WQyC9EraQKmipuxYXsN08="
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://media.gettyimages.com/id/1435877865/photo/melbourne-australia-virat-kohli-of-india-poses-with-the-player-of-the-match-award-during-the.jpg?s=612x612&w=0&k=20&c=vntZgECnvxuWO5N287nhTdjHtNXehUvricr5gc5LPI4="
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://media.gettyimages.com/id/1245200829/photo/doha-qatar-supporters-of-brazil-with-a-trophy-prior-to-the-fifa-world-cup-qatar-2022-group-g.jpg?s=612x612&w=0&k=20&c=fveB1sjm1hz6pXvJAasODMTPoza1ESqqlBiHsl_J_hI="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextDestination;
