import { InputFields } from "../InputFields/InputFields";

interface Props {
  handleMatch: () => void;
}

export const PreferenceInput: React.FC<Props> = ({ handleMatch }) => {
  return (
    <div className="flex flex-col items-center w-2/5 h-5/6 bg-white rounded-2xl m-2">
      <div className="flex items-center h-1/5 w-full bg-[#76323F] rounded-tl-xl rounded-tr-xl">
        <div className="text-2xl text-white pl-8">Find a Flatmate...</div>
      </div>
      <InputFields handleMatch={handleMatch} />
    </div>
  );
};
