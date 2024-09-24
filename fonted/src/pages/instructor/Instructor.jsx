import { Helmet } from "react-helmet-async";
import virat from '../../assets/images/virat.jpg'
import rohit from '../../assets/images/rohit.jpg'
import bumbum from '../../assets/images/bumbum.jpg'
import jaddu from '../../assets/images/jaddu.webp'
import hardik from '../../assets/images/hardik.jpeg'
import msd from '../../assets/images/msd.jpg'
import pant from '../../assets/images/pant.jpg'
import shubham from '../../assets/images/shubham.webp'

const Instructor = () => {
  const instructor=[
  {
    "_id": "6481df377188e639e3dac89c",
    "name": "Virat Kohli",
    "email": "virat.kohli@gmail.com",
    "role": "Batsman",
    "image": virat
  },
  {
    "_id": "6481df377188e639e3dac89d",
    "name": "Rohit Sharma",
    "email": "rohit.sharma@gmail.com",
    "role": "Batsman",
    "image": rohit
  },
  {
    "_id": "6481df377188e639e3dac89e",
    "name": "Jasprit Bumrah",
    "email": "jasprit.bumrah@gmail.com",
    "role": "Bowler",
    "image": bumbum
  },
  {
    "_id": "6481df377188e639e3dac89f",
    "name": "Ravindra Jadeja",
    "email": "ravindra.jadeja@gmail.com",
    "role": "All-Rounder",
    "image": jaddu
  },
  {
    "_id": "6481df377188e639e3dac8a0",
    "name": "Rishabh Pant",
    "email": "Rishabh.pant@gmail.com",
    "role": "Wicketkeeper Batsman",
    "image": pant
  },
  {
    "_id": "6481df377188e639e3dac8a1",
    "name": "Shubman Gill",
    "email": "shubman.gill@gmail.com",
    "role": "Batsman",
    "image": shubham
  },
  {
    "_id": "6481df377188e639e3dac8a2",
    "name": "Hardik Pandya",
    "email": "hardik.pandya@gmail.com",
    "role": "All-Rounder",
    "image": hardik
  },
  {
    "_id": "6481df377188e639e3dac8a3",
    "name": "MS Dhoni",
    "email": "ms.dhoni@gmail.com",
    "role": "Wicketkeeper Batsman",
    "image": msd
  },
  {
    "_id": "6481df377188e639e3dac8a4",
    "name": "Rishabh Pant",
    "email": "rishabh.pant@gmail.com",
    "role": "Wicketkeeper Batsman",
    "image": pant
  }
];



  return (
    <>
     <Helmet>
        <title>VIRATIAN | Collabrators</title>
      </Helmet>
      <h2 className="text-4xl  text-black text-center font-bold my-10">
        Meet Our Collabrators
      </h2>

      {/* instructor card start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 py-20 px-5 ">
        {instructor?.map((instructor) => (
          <div key={instructor._id} className="card my-5 bg-base-100 shadow-xl rounded-none">
            <figure>
              <img
                className=" h-96 w-full object-cover "
                src={instructor?.image}
                alt="instructor image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"><span className="text-[#AC9C63]  font-bold">Name: </span>{instructor?.name}</h2>
              <p className=" font-semibold tracking-tight"><span className="text-cyan-700 font-bold">Email: </span> {instructor?.email}</p>

            
            
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructor;
