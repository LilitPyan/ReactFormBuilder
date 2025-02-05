import React from 'react';
import ITEMS from './data'
import FormPreview from "../FormPreview/FormPreview";
import Item from './../Item/Item';

import style from './App.module.css';
import JsonFormat from "../Form components/jsonFormat";

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

  onSortDragOver = (index) => {
    const draggedOverItem = this.state.dropItems[index];
    if (this.draggedItem === draggedOverItem) {
      return;
    }
    let dropItems = this.state.dropItems.filter(item =>
      item !== this.draggedItem);
    dropItems.splice(index, 0, this.draggedItem);
    this.setState({dropItems});
  };

  onSortDragEnd = () => {
    this.draggedIndex = null;
    this.ordering = false;
  };

  deleteItem = (id) => {
    let d = this.state.dropItems.filter(item =>
      item.id !== id);
    this.setState( {
      dropItems: d
    });
  };

  dataCallId = (dId) => {
       this.deleteItem(dId);
  };

  render(){
    console.log(this.state.dropItems);
    return (
      <div className={style.app_container}>
        <div className={style.drop_zone}>
          <span className={style.form_title}>
            React Form Builder
          </span>
          <FormPreview dropItems={this.state.dropItems}/>
          <ul
            className={style.drop_ul}
            onDrop={this.onDrop}
            onDragOver={this.allowDrop}
          >
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
                    <Item
                      dataCallId={this.dataCallId}
                      data={item.data}
                      id={item.id}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={style.drag_zone}>
          <span className={style.tool_title}>
            Toolbox
          </span>
          <ul>
            {ITEMS.map((item) =>
              <li
                key={item.uniqueId}
                id={item.uniqueId}
                onDragStart={(e) => this.onDragStart(e, item.id)}
                onDragEnd={this.onDragEnd}
                draggable
              >
                <i className={style.li_icon}>{item.icon}</i>
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