import logo from "../../img/flat_fish_logo.png";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center text-5xl h-full font-serif-display">
      <img src={logo} alt="Flat fish logo" className="h-1/2 mr-3"></img>
      FlatFish
    </div>
  );
};
