// @flow
import type {
  DraggableId,
  DraggableLocation,
} from 'react-beautiful-dnd';

export type Author = {|
  id: string,
  name: string,
  avatarUrl: string,
  url: string,
|}

export type Quote = {|
  id: string,
  content: string,
  author: Author
|}

export type Dragging = {|
  id: DraggableId,
  location: DraggableLocation,
|}

export type QuoteMap = {
  [key: string]: Quote[]
}
