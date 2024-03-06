export const NavigationButtons: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-1/2 h-full text-xl text-white">
      <div className="hover:scale-110 duration-200 cursor-pointer">
        My Matches
      </div>
      <div className="hover:scale-110 duration-200 cursor-pointer">Saved</div>
      <div className="hover:scale-110 duration-200 cursor-pointer">Option</div>
    </div>
  );
};
