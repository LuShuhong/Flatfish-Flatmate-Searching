import { LoginButton } from "../../components/LoginButton/LoginButton";
import { SignUpButton } from "./components/SignUpButton/SignupButton";

export const LandingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center h-1/2 w-1/2">
        <div className="flex items-center text-center align-center justify-center text-2xl h-4/5 w-full font-playfair-display pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          orci sed enim sagittis blandit. Aliquam fermentum finibus posuere.
          Pellentesque consequat, mauris id molestie tempor, enim arcu auctor
          dui, id condimentum neque magna at nibh. Etiam varius, mi vel
          fermentum aliquet, arcu nunc venenatis erat, at aliquam felis erat nec
          lectus. Curabitur eu faucibus lacus. Quisque porttitor risus elit, ut
          ultricies sapien ornare non.
        </div>
        <SignUpButton />
      </div>
    </div>
  );
};
