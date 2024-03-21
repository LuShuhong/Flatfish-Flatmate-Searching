import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { Profile } from "../../util/interfaces/Profile";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
interface Props {
  onClick: () => void;
}

export const SaveButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
};
