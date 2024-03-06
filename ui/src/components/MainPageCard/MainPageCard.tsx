import { PreferenceInput } from "../PreferenceInput/PreferenceInput";
import { SlideShow } from "../SlideShow/SlideShow";

interface Props {
  handleMatch: () => void;
}

export const MainPageCard: React.FC<Props> = ({ handleMatch }) => {
  return (
    <div className="flex justify-center items-center w-full h-5/6 bg-black bg-opacity-70">
      <SlideShow />
      <PreferenceInput handleMatch={handleMatch} />
    </div>
  );
};
