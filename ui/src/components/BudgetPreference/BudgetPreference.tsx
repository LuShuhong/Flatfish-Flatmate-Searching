export const BudgetPreference: React.FC = () => {
  return (
    <div className="flex flex-col pl-8 mb-4">
      <div>
        <div className="italic">Min budget</div>
        <input type="range" min={16} max={80} value={16} />
      </div>
      <div>
        <div className="italic">Max budget</div>
        <input type="range" min={16} max={80} value={80} />
      </div>
    </div>
  );
};
