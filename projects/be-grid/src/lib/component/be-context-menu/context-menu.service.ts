import { Injectable } from '@angular/core';
import {ContextMenu} from "../../model/context-menu";

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  contextMenuItems?: ContextMenu[] = [];

  contextMenu(contextMenu?: ContextMenu[]) {
    this.contextMenuItems = contextMenu;
  }
}
