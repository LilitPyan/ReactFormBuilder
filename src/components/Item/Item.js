import React from "react";
import HeaderText from "../Item components/HeaderText/HeaderText";
import Label from "../Item components/Label/Label";
import Paragraph from "../Item components/Paragraph/Paragraph";
import LineBreak from "../Item components/LineBreak/LineBreak";
import Dropdown from "../Item components/Dropdown/Dropdown";
import Checkbox from "../Item components/Checkbox/Checkbox";
import Image from "../Item components/Image/Image";
import MultipleChoice from "../Item components/MultipleChoice/MultipleChoice";
import TextInput from "../Item components/TextInput/TextInput";
import NumberInput from "../Item components/NumberInput/NumberInput";

function Item({ id }) {
  switch (id) {
    case 1:
      return <HeaderText />;
    case 2:
      return <Label />;
    case 3:
      return <Paragraph />;
    case 4:
      return <LineBreak />;
    case 5:
      return <Dropdown />;
    case 6:
      return <Checkbox />;
    case 7:
      return <MultipleChoice />;
    case 8:
      return <TextInput />;
    case 9:
      return <NumberInput />;
    case 10:
      return <Image />;
    default:
      return null;
  }
}

export default Item;