export const BudgetPreference: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-1/5 pl-8">
      <div>
        <div className="">Min budget</div>
        <input type="range" min={16} max={80} value={16} />
      </div>
      <div>
        <div className="">Max budget</div>
        <input type="range" min={16} max={80} value={80} />
      </div>
    </div>
  );
};
