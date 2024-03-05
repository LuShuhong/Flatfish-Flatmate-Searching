import { InputFields } from "../InputFields/InputFields";

export const PreferenceInput: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-2/5 h-full bg-white bg-opacity-20 rounded-xl m-2">
      <div className="flex flex-col h-5/6 w-11/12">
        <div className="text-2xl h-1/5">Find a Flatmate...</div>
        <InputFields />
      </div>
    </div>
  );
};
