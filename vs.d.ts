declare namespace __vis {
  export interface DataItem {
    className?: string;
    content: string;
    end?: Date | number | string | moment.Moment;
    group?: any;
    id?: string | number;
    start: Date | number | string | moment.Moment;
    style?: string;
    subgroup?: string | number;
    title?: string;
    type?: string;
    editable?: boolean;
  }

  export interface DataGroup {
    className?: string;
    content: string;
    id: string | number;
    style?: string;
    subgroup?: string | number;
    title?: string;
  }

  export class DataSet<T extends DataItem | DataGroup> {
    constructor(items: Array<T>);
  }

  export class DataView<T extends DataItem | DataGroup> {
    constructor(items: Array<T>);
  }

  export interface TimelineEditableOption {
    add?: boolean;
    remove?: boolean;
    updateGroup?: boolean;
    updateTime?: boolean;
  }

  export interface TimelineGroupEditableOption {
    add?: boolean;
    remove?: boolean;
    order?: boolean;
  }

  export interface TimelineMarginOption {
    axis?: number;
    item?: number | { horizontal?: number; vertical?: number; };
  }

  export interface TimelineOrientationOption {
    axis?: string;
    item?: string;
  }

  export interface TimelineTimeAxisOption {
    scale?: 'millisecond' | 'second' | 'minute' | 'hour' | 'weekday' | 'day' | 'month' | 'year';
    step?: number;
  }

  export interface TimelineOptions {
    align?: string;
    autoResize?: boolean;
    clickToUse?: boolean;
    configure?: boolean | ((option: string, path: Array<string>) => boolean);
    dataAttributes?: boolean | string | string[];
    editable?: boolean | TimelineEditableOption;
    end?: Date | number | string | moment.Moment;
    format?: any;
    groupEditable?: boolean | TimelineGroupEditableOption;
    groupOrder?: string | Function; // TODO
    groupOrderSwap?: (fromGroup: any, toGroup: any, groups: DataSet<DataGroup>) => void;
    groupTemplate?: Function; // TODO
    height?: number | string;
    hiddenDates?: any; // TODO
    itemsAlwaysDraggable?: boolean;
    locale?: string;
    locales?: any; // TODO
    moment?: Function; // TODO
    margin?: number | TimelineMarginOption;
    max?: Date | number | string | moment.Moment;
    maxHeight?: number | string;
    maxMinorChars?: number;
    min?: Date | number | string | moment.Moment;
    minHeight?: number | string;
    moveable?: boolean;
    multiselect?: boolean;
    multiselectPerGroup?: boolean;
    onAdd?: Function; // TODO
    onAddGroup?: Function; // TODO
    onUpdate?: Function; // TODO
    onMove?: Function; // TODO
    onMoveGroup?: Function; // TODO
    onMoving?: Function; // TODO
    onRemove?: Function; // TODO
    onRemoveGroup?: Function; // TODO
    order?: Function; // TODO
    orientation?: string | TimelineOrientationOption;
    selectable?: boolean;
    showCurrentTime?: boolean;
    showMajorLabels?: boolean;
    showMinorLabels?: boolean;
    stack?: boolean;
    snap?: (date: Date, scale: string, step: number) => Date | number;
    start?: Date | number | string | moment.Moment;
    template?: Function; // TODO
    throttleRedraw?: number;
    timeAxis?: TimelineTimeAxisOption;
    type?: string;
    width?: string | number;
    zoomable?: boolean;
    zoomKey?: string;
    zoomMax?: number;
    zoomMin?: number;
  }

  export interface TimelineFitOptions {
    animation?: boolean | { duration?: number; easingFunction?: string };
  }

  export interface TimelineEventPropertiesResult {
    group?: number;
    item?: number;
    pageX: number;
    pageY: number;
    x: number;
    y: number;
    time: Date;
    snappedTime: Date;
    what?: 'item' | 'background' | 'axis' | 'group-label' | 'custom-time' | 'current-time';
    event: Event;
  }

  export type TimelineEvents =
    'currentTimeTick' |
    'click' |
    'contextmenu' |
    'doubleClick' |
    'groupDragged' |
    'changed' |
    'rangechange' |
    'rangechanged' |
    'select' |
    'timechange' |
    'timechanged';

  export class Timeline {
    constructor(
      container: HTMLElement,
      items: Array<DataItem> | DataSet<DataItem> | DataView<DataItem>,
      groups: Array<DataGroup> | DataSet<DataGroup> | DataView<DataGroup>,
      options?: TimelineOptions
    );
    constructor(
      container: HTMLElement,
      items: Array<DataItem> | DataSet<DataItem> | DataView<DataItem>,
      options?: TimelineOptions
    );

    addCustomTime(time: Date | number | string | moment.Moment, id?: number | string): number | string;
    destroy(): void;
    fit(options?: TimelineFitOptions): void;
    focus(id: string | number, options?: TimelineFitOptions): void;
    focus(ids: Array<string | number>, options?: TimelineFitOptions): void;
    getCurrentTime(): Date;
    getCustomTime(id?: string | number): Date;
    getEventProperties(event: Event): TimelineEventPropertiesResult;
    getItemRange(): any; // TODO
    getSelection(): Array<number>;
    getVisibleItems(): Array<number>;
    getWindow(): Window;
    moveTo(time: Date | number | string | moment.Moment, options?: TimelineFitOptions): void;
    on(event: TimelineEvents, callback: Function): void;
    off(event: TimelineEvents, callback: Function): void;
    redraw(): void;
    removeCustomTime(id: string | number): void;
    setCurrentTime(time: Date | number | string | moment.Moment): void;
    setCustomTime(time: Date | number | string | moment.Moment, id?: string | number): void;
    setCustomTimeTitle(title: string, id?: string | number): void;
    setData(data: { groups?: Array<DataGroup> | DataSet<DataGroup> | DataView<DataGroup>; items?: Array<DataItem> | DataSet<DataItem> | DataView<DataItem> }): void;
    setGroups(groups?: Array<DataGroup> | DataSet<DataGroup> | DataView<DataGroup>): void;
    setItems(items: Array<DataItem> | DataSet<DataItem> | DataView<DataItem>): void;
    setOptions(options: TimelineOptions): void;
    setSelection(id: string | number): void;
    setSelection(ids: Array<string | number>): void;
    setWindow(start: Date | number | string | moment.Moment, end: Date | number | string | moment.Moment, options?: TimelineFitOptions): void;
  }
}

declare module 'vis' {
  export = __vis;
}
