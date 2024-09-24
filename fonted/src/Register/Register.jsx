import { useState } from "react";

export default function Register() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([""]); // Initialize with one member
  const [teamNameError, setTeamNameError] = useState("");

  const [tournament, setTournament] = useState("");
  const [tournamentError, setTournamentError] = useState("");

  // const [additionalInfo, setAdditionalInfo] = useState("");

  const tournaments = [
    { id: 1, name: "Summer Cup 2024" },
    { id: 2, name: "Winter League Championship" },
    { id: 3, name: "Spring Invitational" },
    { id: 4, name: "Fall Classic" },
    { id: 5, name: "Citywide Showdown" },
    { id: 6, name: "National Qualifiers" },
    { id: 7, name: "International Challenge" },
    { id: 8, name: "Local Rivalry Cup" },
    { id: 9, name: "All-Star Tournament" },
    { id: 10, name: "Charity Cup 2024" },
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (nameError || emailError || phoneNumberError) {
        alert("Please fill in all fields correctly.");
        return;
      }
    } else if (step === 2) {
      if (!teamName) {
        setTeamNameError("Team name is required");
        return;
      } else {
        setTeamNameError("");
      }
    } else if (step === 3) {
      if (!tournament) {
        setTournamentError("Tournament selection is required");
        return;
      } else {
        setTournamentError("");
      }
    }
    if (step < 5) setStep((s) => s + 1);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (step > 1) setStep((s) => s - 1);
  };

  const handleConfirm = async () => {
    const response = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        teamName,
        teamMembers,
        tournament,
        // additionalInfo,
      }),
    });

    if (!response.ok) {
      throw new Error("Data not saved");
    } else setStep((s) => s + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="flex mb-4">
        {[1, 2, 3, 4, 5].map((s) => (
          <div
            key={s}
            className={`flex-1 text-center ${
              step === s ? "font-bold" : "text-gray-500"
            }`}
          >
            Step {s}
          </div>
        ))}
      </nav>

      <ProgressBar currentStep={step} totalSteps={5} />

      <main className="mt-4">
        <div className="mt-16">
          {step === 1 && (
            <PersonalInfoForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              nameError={nameError}
              setNameError={setNameError}
              emailError={emailError}
              setEmailError={setEmailError}
              phoneNumberError={phoneNumberError}
              setPhoneNumberError={setPhoneNumberError}
            />
          )}

          {step === 2 && (
            <TeamDetailsForm
              teamName={teamName}
              setTeamName={setTeamName}
              teamMembers={teamMembers}
              setTeamMembers={setTeamMembers}
              teamNameError={teamNameError}
            />
          )}

          {step === 3 && (
            <TournamentSelectionForm
              tournament={tournament}
              setTournament={setTournament}
              tournamentError={tournamentError}
              tournaments={tournaments}
            />
          )}

          {step === 4 && (
            <ReviewSection
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              teamName={teamName}
              teamMembers={teamMembers}
              tournament={tournament}
              // additionalInfo={additionalInfo}
            />
          )}

          {step === 5 && <ThankYou />}
        </div>

        <div className="mt-6 flex justify-between">
          {step > 1 && step < 5 && (
            <button
              className="btn border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#797464]"
              onClick={handlePrev}
            >
              Go Back
            </button>
          )}
          {step < 4 && (
            <button
              className="btn border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#797464]"
              onClick={handleNext}
            >
              Next Step
            </button>
          )}
          {step === 4 && (
            <button
              className="btn border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#797464]"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

function ProgressBar({ currentStep, totalSteps }) {
  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
      <div
        className="bg-slate-500 h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

function PersonalInfoForm({
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  nameError,
  setNameError,
  emailError,
  setEmailError,
  phoneNumberError,
  setPhoneNumberError,
}) {
  const validateName = () => {
    setNameError(!name ? "Name is required" : "");
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      !email
        ? "Email is required"
        : !emailPattern.test(email)
        ? "Invalid email format"
        : ""
    );
  };

  const validatePhoneNumber = () => {
    const phonePattern = /^\+\d{1,3} \d{1,3} \d{1,3} \d{1,3}$/;
    setPhoneNumberError(
      !phoneNumber
        ? "Phone number is required"
        : !phonePattern.test(phoneNumber)
        ? "Invalid phone number format"
        : ""
    );
  };

  return (
    <form>
      <div className="mb-4">
        <label className="block">Name</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
        />
        <div className="text-red-500">{nameError}</div>
      </div>
      <div className="mb-4">
        <label className="block">Email Address</label>
        <input
          type="email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        <div className="text-red-500">{emailError}</div>
      </div>
      <div className="mb-4">
        <label className="block">Phone Number</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onBlur={validatePhoneNumber}
        />
        <div className="text-red-500">{phoneNumberError}</div>
      </div>
    </form>
  );
}

// TeamDetailsForm Component
function TeamDetailsForm({
  teamName,
  setTeamName,
  teamMembers,
  setTeamMembers,
  teamNameError,
}) {
  return (
    <form>
      <div className="mb-4">
        <label className="block">Team Name</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <div className="text-red-500">{teamNameError}</div>
      </div>
      <div className="mb-4">
        <label className="block">Team Members</label>
        {teamMembers.map((member, index) => (
          <input
            key={index}
            type="text"
            className="border p-2 w-full mb-2"
            placeholder={`Member ${index + 1}`}
            value={member}
            onChange={(e) => {
              const updatedMembers = [...teamMembers];
              updatedMembers[index] = e.target.value;
              setTeamMembers(updatedMembers);
            }}
          />
        ))}
        <button
          type="button"
          className="border p-2 bg-blue-500 text-white"
          onClick={() => setTeamMembers([...teamMembers, ""])}
        >
          Add Member
        </button>
      </div>
    </form>
  );
}

// TournamentSelectionForm Component
function TournamentSelectionForm({
  tournament,
  setTournament,
  tournamentError,
  tournaments,
}) {
  return (
    <form>
      <div className="mb-4">
        <label className="block">Select Tournament</label>
        <select
          value={tournament}
          onChange={(e) => setTournament(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select a tournament</option>
          {tournaments.map((t) => (
            <option key={t.id} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <div className="text-red-500">{tournamentError}</div>
      </div>
    </form>
  );
}

// ReviewSection Component
function ReviewSection({
  name,
  email,
  phoneNumber,
  teamName,
  teamMembers,
  tournament,
  additionalInfo,
}) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">Review Your Information</h2>
      <div className="mt-4">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone Number:</strong> {phoneNumber}
        </p>
        <p>
          <strong>Team Name:</strong> {teamName}
        </p>
        <p>
          <strong>Team Members:</strong> {teamMembers.join(", ")}
        </p>
        <p>
          <strong>Tournament:</strong> {tournament}
        </p>
        <p>
          <strong>Additional Information:</strong> {additionalInfo}
        </p>
      </div>
    </div>
  );
}

// // AdditionalInfoForm Component
// function AdditionalInfoForm({ additionalInfo, setAdditionalInfo }) {
//   return (
//     <form>
//       <div className="mb-4">
//         <label className="block">Additional Information</label>
//         <textarea
//           className="border p-2 w-full"
//           rows="4"
//           value={additionalInfo}
//           onChange={(e) => setAdditionalInfo(e.target.value)}
//         />
//       </div>
//     </form>
//   );
// }

// ThankYou Component
function ThankYou() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Thank You for Registering!</h2>
      <p>Your registration has been successfully submitted.</p>
    </div>
  );
}
