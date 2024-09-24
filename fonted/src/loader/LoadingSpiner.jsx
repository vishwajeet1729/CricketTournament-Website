import logof from '../assets/logo/logof.gif'
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen relative">
      {/* Cricket Ball GIF */}
      <img
        src={logof} // Replace with actual GIF URL
        alt="Bouncing Cricket Ball"
        className="w-16 h-16"
      />
    </div>
  );
};

export default LoadingSpinner;
