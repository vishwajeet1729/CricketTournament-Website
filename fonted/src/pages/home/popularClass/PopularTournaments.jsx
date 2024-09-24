import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import rcb from '../../../assets/logo/rcb.png'
import mi from '../../../assets/logo/mi.png'
import csk from '../../../assets/logo/csk.webp'
import kkr from '../../../assets/logo/kkr.png'
import lsg from '../../../assets/logo/lsg.webp'
// import pk from '../../../assets/logo/pk.webp'
import gt from '../../../assets/logo/gt.jpg'





const PopularTournaments = () => {
  const popularTournaments =[
    {
      "_id": "64858baad4423b826e432f14",
      "tournamentName": "Cricket Championship 2024",
      "organizer": "Rahul",
      "organizerEmail": "rahul@gmail.com",
      "location": "Mumbai, India",
      "tournamentSize": 16,
      "availableSlots": 8,
      "totalMatches": 31,
      "matchesPlayed": 20,
      "tournamentLogo": rcb
    },
    {
      "_id": "64858baad4423b826e432f15",
      "tournamentName": "International Cricket Cup",
      "organizer": "Virat",
      "organizerEmail": "virat@gmail.com",
      "location": "Delhi, India",
      "tournamentSize": 20,
      "availableSlots": 12,
      "totalMatches": 40,
      "matchesPlayed": 25,
      "tournamentLogo": mi
    },
    {
      "_id": "64858baad4423b826e432f16",
      "tournamentName": "National League 2024",
      "organizer": "Sachin",
      "organizerEmail": "sachin@gmail.com",
      "location": "Bangalore, India",
      "tournamentSize": 12,
      "availableSlots": 5,
      "totalMatches": 24,
      "matchesPlayed": 18,
      "tournamentLogo":csk
    },
    {
      "_id": "64858baad4423b826e432f17",
      "tournamentName": "Asia Cricket Trophy",
      "organizer": "Dhoni",
      "organizerEmail": "dhoni@gmail.com",
      "location": "Chennai, India",
      "tournamentSize": 14,
      "availableSlots": 7,
      "totalMatches": 30,
      "matchesPlayed": 20,
      "tournamentLogo": kkr
    },
    {
      "_id": "64858baad4423b826e432f18",
      "tournamentName": "World Cricket Series",
      "organizer": "Rohit",
      "organizerEmail": "rohit@gmail.com",
      "location": "Kolkata, India",
      "tournamentSize": 10,
      "availableSlots": 4,
      "totalMatches": 18,
      "matchesPlayed": 12,
      "tournamentLogo": gt
    },
    {
      "_id": "64858baad4423b826e432f19",
      "tournamentName": "Super Six Tournament",
      "organizer": "Kapil",
      "organizerEmail": "kapil@gmail.com",
      "location": "Jaipur, India",
      "tournamentSize": 6,
      "availableSlots": 3,
      "totalMatches": 15,
      "matchesPlayed": 10,
      "tournamentLogo": lsg
    }
  ]
  ;

  return (
    <>
      <Slide>
        <div className="text-center">
          <h2 className="text-4xl text-black text-center font-bold my-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Popular Cricket Tournaments
          </h2>
        </div>
      </Slide>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 py-20 px-5 bg-transparent">
        {popularTournaments?.map((tournament) => (
          <motion.div
            key={tournament?._id}
            className={`card my-5 bg-base-100 rounded-3xl shadow-xl ${
              tournament?.availableSlots === 0 && "bg-red-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <figure className="px-10 pt-10">
              <img
                src={tournament?.tournamentLogo}
                alt="tournament logo"
                className="rounded-3xl h-96 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-[#AC9C63] font-bold">Tournament Name:</span>
                <span className="uppercase"> {tournament?.tournamentName}</span>
              </h2>
              <p>
                <span className="text-[#AC9C63] font-bold">Organizer:</span> {tournament?.organizer}
              </p>
              <p>
                <span className="text-[#AC9C63] font-bold">Location:</span> {tournament?.location}
              </p>
              <p>
                <span className="text-[#AC9C63] font-bold">Total Teams:</span> {tournament?.tournamentSize}
              </p>
              <p>
                <span className="text-[#AC9C63] font-bold">Available Slots:</span> {tournament?.availableSlots}
              </p>
              <p>
                <span className="text-[#AC9C63] font-bold">Matches Played:</span> {tournament?.matchesPlayed} / {tournament?.totalMatches}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PopularTournaments;
