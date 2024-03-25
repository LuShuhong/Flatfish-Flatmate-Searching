import { MdUpload } from "react-icons/md";

interface Props {
  pic: string;
  handleImageChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const ProfilePic: React.FC<Props> = ({ pic, handleImageChange }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-center w-28 h-28 rounded-1/2 border overflow-hidden">
        <img src={pic} alt="profile" className=""></img>
      </div>
      <label className="ml-2">
        <div className="">
          <MdUpload />
        </div>
        <input
          type="file"
          name="image"
          accept="image/png, image/jpg"
          onChange={(e) => handleImageChange(e)}
          className="hidden"
        ></input>
      </label>
    </div>
  );
};
