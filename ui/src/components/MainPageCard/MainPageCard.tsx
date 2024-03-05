import { PreferenceInput } from "../PreferenceInput/PreferenceInput";
import { SlideShow } from "../SlideShow/SlideShow";

export const MainPageCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-4/6">
      <SlideShow />
      <PreferenceInput />
    </div>
  );
};
