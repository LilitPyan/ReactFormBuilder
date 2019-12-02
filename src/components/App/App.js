import React from 'react';
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
import MultiLineInput from "../MultiLineInput/MultiLineInput";

import style from './App.module.css';

import {
  FaArrowsAltH,
  FaCaretSquareDown,
  FaFont,
  FaHeading,
  FaParagraph,
  FaPlus,
  FaRegImage,
  FaTextHeight
} from 'react-icons/fa';
import {FiCheckSquare} from 'react-icons/fi';
import {MdRadioButtonChecked} from 'react-icons/md';
import FormPreview from "../FormPreview/FormPreview";

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
    name: 'Multi-line Input',
    icon: <FaTextHeight/>,
    content: <MultiLineInput/>
  },
  {
    id: 11,
    name: 'Image',
    icon: <FaRegImage/>,
    content: <Image/>
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ordering = false;
    this.state = {
      dropItems: [],
      display: false
    };
  }

  onDragStart = (e, v) => {
    this.draggedItem = v;
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("id", v);
  };

  allowDrop = (ev) => {
    if (this.ordering) {
      return;
    }

    ev.preventDefault();
  };

  onDrop = (e) => {
    if (this.ordering) {
      return;
    }

    e.preventDefault();
    const data = e.dataTransfer.getData("id");

    this.setState({
      dropItems: [
        ...this.state.dropItems,
        {
          ...ITEMS[data - 1],
          uniqueId: Math.random(),
        }
      ]
    });
  };

  onDragEnd = (index) => {
    this.index = null;
  };

  onSortDragStart = (e, index) => {
    this.ordering = true;
    this.draggedItem = this.state.dropItems[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("id", e.target.parentNode);
  };

  onSortDragOver = index => {
    const draggedOverItem = this.state.dropItems[index];
    if (this.draggedItem === draggedOverItem) {
      return;
    }
    let dropItems = this.state.dropItems.filter(item => item !== this.draggedItem);
    dropItems.splice(index, 0, this.draggedItem);
    this.setState({dropItems});
  };

  onSortDragEnd = () => {
    this.draggedIndex = null;
    this.ordering = false;
  };

  render() {
    return (
      <div className={style.app_container}>
        <div className={style.drop_zone}>
          <span className={style.form_title}>
            React Form Builder
          </span>
           <FormPreview />
          <ul className={style.drop_ul} onDrop={this.onDrop} onDragOver={this.allowDrop}>
            {this.state.dropItems.map((item, index) => {
              return (
                <li
                  key={item.uniqueId}
                  id={item.uniqueId}
                  className={style.drag_drop_item}
                  onDragOver={() => this.onSortDragOver(index)}
                >
                  <div
                    draggable
                    onDragStart={e => this.onSortDragStart(e, index)}
                    onDragEnd={this.onSortDragEnd}
                  >
                    {item.content}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={style.drag_zone}>
          <span className={style.tool_title}>Toolbox</span>
          <ul>
            {ITEMS.map((item) =>
              <li
                key={item.uniqueId}
                id={item.uniqueId}
                onDragStart={(e) => this.onDragStart(e, item.id)}
                onDragEnd={this.onDragEnd}
                draggable
              >
                <i className={style.li_icon}> {item.icon}</i>
                {item.name}
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;