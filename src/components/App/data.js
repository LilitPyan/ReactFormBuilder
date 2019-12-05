import React from "react";
import {
  FaArrowsAltH,
  FaCaretSquareDown,
  FaFont,
  FaHeading,
  FaParagraph,
  FaPlus,
  FaRegImage,
} from 'react-icons/fa';
import {FiCheckSquare} from 'react-icons/fi';
import {MdRadioButtonChecked} from 'react-icons/md';

const ITEMS = [
  {
    id: 1,
    name: 'Header Text',
    icon: <FaHeading />,
  },
  {
    id: 2,
    name: 'Label',
    icon: <FaFont />,
  },
  {
    id: 3,
    name: 'Paragraph',
    icon: <FaParagraph />,
  },
  {
    id: 4,
    name: 'Line Break',
    icon: <FaArrowsAltH />,
  },
  {
    id: 5,
    name: 'Dropdown',
    icon: <FaCaretSquareDown />,
  },
  {
    id: 6,
    name: 'Checkbox',
    icon: <FiCheckSquare />,
  },
  {
    id: 7,
    name: 'Multiple Choice',
    icon: <MdRadioButtonChecked />,
  },
  {
    id: 8,
    name: 'Text Input',
    icon: <FaFont />,
  },
  {
    id: 9,
    name: 'Number Input',
    icon: <FaPlus />,
  },
  {
    id: 10,
    name: 'Image',
    icon: <FaRegImage />,
  },
];

export default ITEMS;