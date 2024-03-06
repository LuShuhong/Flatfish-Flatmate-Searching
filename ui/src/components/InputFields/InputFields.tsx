export const InputFields: React.FC = () => {
  return (
    <div className="w-full h-4/5 rounded-bl-xl rounded-br-xl">
      <div className="flex flex-col justify-center h-1/5 w-1/3 pl-8">
        Gender:
        <label className="flex">
          <span className="flex-1 text-sm">&emsp; male</span>
          <input
            type="radio"
            id="male"
            className=""
            value="male"
            name="gender"
          />
        </label>
        <label className="flex">
          <span className="flex-1 text-sm">&emsp; female</span>
          <input
            type="radio"
            id="male"
            className=""
            value="female"
            name="gender"
          />
        </label>
        <label className="flex">
          <span className="flex-1 text-sm">&emsp; no preference</span>
          <input
            type="radio"
            id="male"
            className=""
            value="no preference"
            name="gender"
          />
        </label>
      </div>
      <div className="flex flex-col justify-center h-1/5 pl-8">
        <div>
          <div className="">Min age</div>
          <input type="range" min={16} max={80} value={16} />
        </div>
        <div>
          <div className="">Max age</div>
          <input type="range" min={16} max={80} value={80} />
        </div>
      </div>
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
      <div className="flex flex-col justify-center h-1/5 pl-8">
        <div className="flex w-1/2">
          <span className="flex-1">Location:</span>
          <input type="text" className="border-2" />
        </div>
        <div>
          <div className="">Radius</div>
          <input type="range" min={16} max={80} value={16} />
        </div>
      </div>
      <div className="flex items-center h-1/5 pl-8">
        <button className="border-2 w-1/2 h-1/2 hover:text-xl">Match</button>
      </div>
    </div>
  );
};
