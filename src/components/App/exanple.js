let data = this.props.data;
Object.keys(data).forEach(key => {
  let value = data[key];

  console.log(`${key}: ${value}`);
});