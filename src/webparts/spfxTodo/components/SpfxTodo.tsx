import * as React from 'react';
import styles from './SpfxTodo.module.scss';
import { ISpfxTodoProps } from './ISpfxTodoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxTodo extends React.Component<ISpfxTodoProps, {}> {
  public render(): React.ReactElement<ISpfxTodoProps> {
    return (
      <div>
        <p>{this.props.todoListName}</p>
      </div>
    );
  }
}
