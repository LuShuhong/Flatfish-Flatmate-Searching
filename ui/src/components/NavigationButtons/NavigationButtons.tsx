export const NavigationButtons: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-1/2 h-full text-xl text-white">
      <div className="hover:scale-110 duration-200">My Matches</div>
      <div className="hover:scale-110 duration-200">Saved</div>
      <div className="hover:scale-110 duration-200">Option</div>
    </div>
  );
};
