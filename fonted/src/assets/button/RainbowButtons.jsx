import './RainbowButtons.css';  // External CSS file for styles

const RainbowButtons = (prop) => {
  return (
    <div className="container text-center">
    

      <a className="rainbow rainbow-1" href="#">{prop.children}</a>
    
 
    </div>
  );
};

export default RainbowButtons;
