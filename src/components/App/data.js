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
    data: [],
    icon: <FaHeading />,
  },
  {
    id: 2,
    name: 'Label',
    data:[],
    icon: <FaFont />,
  },
  {
    id: 3,
    name: 'Paragraph',
    data:[],
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
    data:[],
    icon: <FaCaretSquareDown />,
  },
  {
    id: 6,
    name: 'Checkbox',
    data:[],
    icon: <FiCheckSquare />,
  },
  {
    id: 7,
    name: 'Multiple Choice',
    data:[],
    icon: <MdRadioButtonChecked />,
  },
  {
    id: 8,
    name: 'Text Input',
    data:[],
    icon: <FaFont />,
  },
  {
    id: 9,
    name: 'Number Input',
    data:[],
    icon: <FaPlus />,
  },
  {
    id: 10,
    name: 'Image',
    data:[],
    icon: <FaRegImage />,
  },
];

export default ITEMS;