import { useState } from "react";
import { EditButton } from "../../../../components/EditButton/EditButton";
import { SubmitChangeButton } from "../../../../components/SubmitChangeButton/SubmitChangeButton";

interface Props {
  fieldName: string;
  placeholder: string;
  type: string;
  mandatory?: boolean;
  value: string;
  handleChange: (val: string) => void;
  warning?: boolean;
  disabled?: boolean;
  edittable?: boolean;
  editMode?: boolean;
  strictUserId?: boolean;
}

export const TextInput: React.FC<Props> = ({
  fieldName,
  placeholder,
  type,
  mandatory,
  value,
  handleChange,
  warning,
  disabled,
  edittable,
  editMode,
  strictUserId,
}) => {
  const [edit, setEdit] = useState<boolean | undefined>(editMode);
  const handleSubmitChange = (): void => setEdit(() => false);
  const handleEdit = (): void => setEdit(() => true);
  const handleEnter = (key: string): void => {
    key === "Enter" && edittable && setEdit(() => false);
  };
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="flex items-center">
        <div className="text-sm">
          {fieldName}
          {mandatory && <sup className="text-red-600">*</sup>}
        </div>
        {warning && (
          <div className="text-xs text-red-700 ml-1">
            This field is required
          </div>
        )}
      </div>
      {edit ? (
        <div className="h-3/5 w-95% relative">
          <input
            type={type}
            className={`h-full w-full rounded-lg p-2 border border-gray-400 text-sm ${
              disabled && "text-gray-400"
            } ${edittable ? "bg-transparent" : "bg-[#E5E5E5]"}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            onKeyDown={(e) => handleEnter(e.key)}
          ></input>
          {edittable && (
            <div className="absolute right-2 bottom-3.5">
              <SubmitChangeButton handleSubmitChange={handleSubmitChange} />
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center h-3/5 w-95% p-2">
          <div className="text-sm text-gray-500">{value}</div>
          {!strictUserId && (
            <div className="bg-white relative h-full">
              <div className="absolute top-1.5 left-3">
                <EditButton handleEdit={handleEdit} />
              </div>
            </div>
          )}
        </div>
      )}
    </label>
  );
};
