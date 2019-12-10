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

function Item({ id, deleteItem }) {

  switch (id) {
    case 1:
      return <HeaderText deleteItem={deleteItem} />;
    case 2:
      return <Label deleteItem={deleteItem} />;
    case 3:
      return <Paragraph deleteItem={deleteItem} />;
    case 4:
      return <LineBreak deleteItem={deleteItem} />;
    case 5:
      return <Dropdown deleteItem={deleteItem} />;
    case 6:
      return <Checkbox deleteItem={deleteItem} />;
    case 7:
      return <MultipleChoice deleteItem={deleteItem} />;
    case 8:
      return <TextInput deleteItem={deleteItem} />;
    case 9:
      return <NumberInput deleteItem={deleteItem} />;
    case 10:
      return <Image deleteItem={deleteItem} />;
    default:
      return null;
  }
}

export default Item;