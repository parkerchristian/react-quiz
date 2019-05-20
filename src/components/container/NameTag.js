import React, { PureComponent } from 'react';
import TextSelector from '../presentational/TextSelector';
import ColorSelector from '../presentational/ColorSelector';
import Shape from '../presentational/Shape';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: 'black',
    backgroundColor: 'white'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }


  render() {

    const { text, color, backgroundColor } = this.state;
    return (
      <>
      <TextSelector text={text} handleChange={this.handleChange} />
      <ColorSelector color={color} backgroundColor={backgroundColor}  handleChange={this.handleChange} />
      <Shape {...this.state}/>
      </>
    );
  }
}
