import React, { PureComponent } from 'react';
import TextSelector from '../presentational/TextSelector';
import ColorSelector from '../presentational/ColorSelector';
import Shape from '../presentational/Shape';

export default class NameTag extends PureComponent {
  render() {
    return (
      <>
      <TextSelector />
      <ColorSelector />
      <ColorSelector />
      <Shape />
      </>
    );
  }
}
