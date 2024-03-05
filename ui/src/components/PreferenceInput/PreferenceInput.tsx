import { InputFields } from "../InputFields/InputFields";

export const PreferenceInput: React.FC = () => {
  return (
    <div className="flex justify-center w-2/5 h-5/6 bg-white rounded-2xl m-2">
      <div className="flex items-center h-1/5 w-full bg-[#76323F] rounded-tl-xl rounded-tr-xl">
        <div className="text-2xl ml-4 text-white">Find a Flatmate...</div>
      </div>
      <InputFields />
    </div>
  );
};
