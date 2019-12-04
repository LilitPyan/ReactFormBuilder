import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import Label from "../Label/Label";
import Paragraph from "../Paragraph/Paragraph";
import LineBreak from "../LineBreak/LineBreak";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import Image from "../Image/Image";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import TextInput from "../TextInput/TextInput";
import NumberInput from "../NumberInput/NumberInput";

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
    icon: <FaHeading/>,
    content: <HeaderText/>
  },
  {
    id: 2,
    name: 'Label',
    icon: <FaFont/>,
    content: <Label/>
  },
  {
    id: 3,
    name: 'Paragraph',
    icon: <FaParagraph/>,
    content: <Paragraph/>
  },
  {
    id: 4,
    name: 'Line Break',
    icon: <FaArrowsAltH/>,
    content: <LineBreak/>
  },
  {
    id: 5,
    name: 'Dropdown',
    icon: <FaCaretSquareDown/>,
    content: <Dropdown/>
  },
  {
    id: 6,
    name: 'Checkbox',
    icon: <FiCheckSquare/>,
    content: <Checkbox/>
  },
  {
    id: 7,
    name: 'Multiple Choice',
    icon: <MdRadioButtonChecked/>,
    content: <MultipleChoice/>
  },
  {
    id: 8,
    name: 'Text Input',
    icon: <FaFont/>,
    content: <TextInput/>
  },
  {
    id: 9,
    name: 'Number Input',
    icon: <FaPlus/>,
    content: <NumberInput/>
  },
  {
    id: 10,
    name: 'Image',
    icon: <FaRegImage/>,
    content: <Image/>
  },
];

export default ITEMS;