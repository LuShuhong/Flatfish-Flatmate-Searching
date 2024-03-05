import { PreferenceInput } from "../PreferenceInput/PreferenceInput";
import { SlideShow } from "../SlideShow/SlideShow";

export const MainPageCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-5/6 bg-black bg-opacity-70">
      <SlideShow />
      <PreferenceInput />
    </div>
  );
};
