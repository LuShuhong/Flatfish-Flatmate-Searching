import { NavBar } from "../../components/NavBar/NavBar";
import { PreferenceInput } from "../../components/PreferenceInput/PreferenceInput";

export const MainPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center w-full h-full">
        <PreferenceInput />
      </div>
    </>
  );
  return <div className="">hello world!</div>;
};
