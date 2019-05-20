import React, { PureComponent } from 'react';
import TextSelector from '../presentational/TextSelector';
import ColorSelector from '../presentational/ColorSelector';
import Shape from '../presentational/Shape';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    fontColor: '',
    backgroundColor: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }


  render() {

    const { text, fontColor, backgroundColor } = this.state;
    return (
      <>
      <TextSelector handleChange={this.handleChange} />
      <ColorSelector color={backgroundColor} handleChange={this.handleChange} />
      <ColorSelector color={text} handleChange={this.handleChange} />
      <Shape text={text} backgroundColor={backgroundColor} fontColor={fontColor}/>
      </>
    );
  }
}
