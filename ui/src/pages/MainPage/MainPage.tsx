import { MainPageCard } from "../../components/MainPageCard/MainPageCard";

interface Props {
  handleMatch: () => void;
}

export const MainPage: React.FC<Props> = ({ handleMatch }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <MainPageCard handleMatch={handleMatch} />
    </div>
  );
};
