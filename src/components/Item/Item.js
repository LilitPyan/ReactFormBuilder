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

function Item({ id, data, dataCallId, dataUpdate }) {

  switch (id) {
    case 1:
      return (
        <HeaderText
        id={id}
        data={data}
        dataCallId={dataCallId}
      />
      );
    case 2:
      return (
        <Label
          id={id}
          data={data}
          dataCallId={dataCallId}
        />
        );
    case 3:
      return (
        <Paragraph
          id={id}
          data={data}
          dataCallId={dataCallId}
        />
        );
    case 4:
      return (
        <LineBreak
          id={id}
          dataCallId={dataCallId}
        />
        );
    case 5:
      return (
        <Dropdown
          id={id}
          data={data}
          dataCallId={dataCallId}
        />
        );
    case 6:
      return (
        <Checkbox
          id={id}
          data={data}
          dataCallId={dataCallId}
        />
        );
    case 7:
      return (
        <MultipleChoice
          id={id}
          data={data}
          dataCallId={dataCallId}
        />
        );
    case 8:
      return (
        <TextInput
          id={id}
          data={data}
          dataCallId={dataCallId}
        />
        );
    case 9:
      return (
        <NumberInput
          id={id}
          data={data}
          dataCallId={dataCallId}
        />
        );
    case 10:
      return (
        <Image
          id={id}
          data={data}
          dataCallId={dataCallId}
        />
        );
    default:
      return null;
  }
}

export default Item;