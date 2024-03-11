import { AgeOption } from "../AgeOption/AgeOption";

interface Props {
  ageRange: [min: number, max: number];
  handleAge: (val: number, index: 0 | 1) => void;
}

export const AgePreference: React.FC<Props> = ({ ageRange, handleAge }) => {
  return (
    <div className="flex flex-col mb-4">
      <AgeOption
        ageName="Minimum age"
        age={ageRange[0]}
        handleAge={handleAge}
        index={0}
      />
      <AgeOption
        ageName="Maximum age"
        age={ageRange[1]}
        handleAge={handleAge}
        index={1}
      />
    </div>
  );
};
