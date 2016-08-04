// Type definitions for vis.js
// Project: https://github.com/almende/vis
// Definitions by: Adrian Caballero at Epic Labs <adrian@epiclabs.io>
//                 Michaël Bitard <>
//                 Pat Sissons  <>
// Definitions: ---

declare namespace __vis {
  type IdType = string | number;
  type SubgroupType = IdType;
  type DateType = Date | number | string | moment.Moment;
  type HeightWidthType = IdType;
  type TimelineTimeAxisScaleType = 'millisecond' | 'second' | 'minute' | 'hour' | 'weekday' | 'day' | 'month' | 'year';
  type TimelineEventPropertiesResultWhatType = 'item' | 'background' | 'axis' | 'group-label' | 'custom-time' | 'current-time';
  type TimelineEvents =
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

  interface DataItem {
    className?: string;
    content: string;
    end?: DateType;
    group?: any;
    id?: IdType;
    start: DateType;
    style?: string;
    subgroup?: SubgroupType;
    title?: string;
    type?: string;
    editable?: boolean;
  }

  interface DataGroup {
    className?: string;
    content: string;
    id: IdType;
    style?: string;
    subgroup?: SubgroupType;
    title?: string;
  }

  interface TimelineEditableOption {
    add?: boolean;
    remove?: boolean;
    updateGroup?: boolean;
    updateTime?: boolean;
  }

  interface TimelineGroupEditableOption {
    add?: boolean;
    remove?: boolean;
    order?: boolean;
  }

  interface TimelineMarginItem {
    horizontal?: number;
    vertical?: number;
  }

  type TimelineMarginItemType = number | TimelineMarginItem;

  interface TimelineMarginOption {
    axis?: number;
    item?: TimelineMarginItemType;
  }

  interface TimelineOrientationOption {
    axis?: string;
    item?: string;
  }

  interface TimelineTimeAxisOption {
    scale?: TimelineTimeAxisScaleType;
    step?: number;
  }

  type TimelineOptionsConfigureFunction = (option: string, path: Array<string>) => boolean;
  type TimelineOptionsConfigureType = boolean | TimelineOptionsConfigureFunction;
  type TimelineOptionsDataAttributesType = boolean | string | string[];
  type TimelineOptionsEditableType = boolean | TimelineEditableOption;
  type TimelineOptionsGroupEditableType = boolean | TimelineGroupEditableOption;
  type TimelineOptionsGroupOrderType = string | Function; // TODO
  type TimelineOptionsGroupOrderSwapFunction = (fromGroup: any, toGroup: any, groups: DataSet<DataGroup>) => void;
  type TimelineOptionsMarginType = number | TimelineMarginOption;
  type TimelineOptionsOrientationType = string | TimelineOrientationOption;
  type TimelineOptionsSnapFunction = (date: Date, scale: string, step: number) => Date | number;
  // type TimelineOptions =

  interface TimelineOptions {
    align?: string;
    autoResize?: boolean;
    clickToUse?: boolean;
    configure?: TimelineOptionsConfigureType;
    dataAttributes?: TimelineOptionsDataAttributesType;
    editable?: TimelineOptionsEditableType;
    end?: DateType;
    format?: any; // TODO
    groupEditable?: TimelineOptionsGroupEditableType;
    groupOrder?: TimelineOptionsGroupOrderType;
    groupOrderSwap?: TimelineOptionsGroupOrderSwapFunction;
    groupTemplate?: Function; // TODO
    height?: HeightWidthType;
    hiddenDates?: any; // TODO
    itemsAlwaysDraggable?: boolean;
    locale?: string;
    locales?: any; // TODO
    moment?: Function; // TODO
    margin?: TimelineOptionsMarginType;
    max?: DateType;
    maxHeight?: HeightWidthType;
    maxMinorChars?: number;
    min?: DateType;
    minHeight?: HeightWidthType;
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
    orientation?: TimelineOptionsOrientationType;
    selectable?: boolean;
    showCurrentTime?: boolean;
    showMajorLabels?: boolean;
    showMinorLabels?: boolean;
    stack?: boolean;
    snap?: TimelineOptionsSnapFunction;
    start?: DateType;
    template?: Function; // TODO
    throttleRedraw?: number;
    timeAxis?: TimelineTimeAxisOption;
    type?: string;
    width?: HeightWidthType;
    zoomable?: boolean;
    zoomKey?: string;
    zoomMax?: number;
    zoomMin?: number;
  }

  interface TimelineFitAnimation {
    duration?: number;
    easingFunction?: string;
  }

  type TimelineFitAnimationType = boolean | TimelineFitAnimation;

  interface TimelineFitOptions {
    animation?: TimelineFitAnimationType;
  }

  interface TimelineEventPropertiesResult {
    group?: number;
    item?: number;
    pageX: number;
    pageY: number;
    x: number;
    y: number;
    time: Date;
    snappedTime: Date;
    what?: TimelineEventPropertiesResultWhatType;
    event: Event;
  }

  export class DataSet<T extends DataItem | DataGroup> {
    constructor(items: Array<T>);

    length: number;
  }

  export class DataView<T extends DataItem | DataGroup> {
    constructor(items: Array<T>);

    length: number;
  }

  type DataItemCollectionType = Array<DataItem> | DataSet<DataItem> | DataView<DataItem>;
  type DataGroupCollectionType = Array<DataGroup> | DataSet<DataGroup> | DataView<DataGroup>;

  export class Timeline {
    constructor(
      container: HTMLElement,
      items: DataItemCollectionType,
      groups: DataGroupCollectionType,
      options?: TimelineOptions
    );
    constructor(
      container: HTMLElement,
      items: DataItemCollectionType,
      options?: TimelineOptions
    );

    addCustomTime(time: DateType, id?: IdType): IdType;
    destroy(): void;
    fit(options?: TimelineFitOptions): void;
    focus(id: IdType, options?: TimelineFitOptions): void;
    focus(ids: Array<IdType>, options?: TimelineFitOptions): void;
    getCurrentTime(): Date;
    getCustomTime(id?: IdType): Date;
    getEventProperties(event: Event): TimelineEventPropertiesResult;
    getItemRange(): any; // TODO
    getSelection(): Array<IdType>;
    getVisibleItems(): Array<IdType>;
    getWindow(): Window;
    moveTo(time: DateType, options?: TimelineFitOptions): void;
    on(event: TimelineEvents, callback: Function): void;
    off(event: TimelineEvents, callback: Function): void;
    redraw(): void;
    removeCustomTime(id: IdType): void;
    setCurrentTime(time: DateType): void;
    setCustomTime(time: DateType, id?: IdType): void;
    setCustomTimeTitle(title: string, id?: IdType): void;
    setData(data: { groups?: DataGroupCollectionType; items?: DataItemCollectionType }): void;
    setGroups(groups?: DataGroupCollectionType): void;
    setItems(items: DataItemCollectionType): void;
    setOptions(options: TimelineOptions): void;
    setSelection(id: IdType): void;
    setSelection(ids: Array<IdType>): void;
    setWindow(start: DateType, end: DateType, options?: TimelineFitOptions): void;
  }

  export interface ITimelineStatic {
      new(id: HTMLElement, data: any, options?: any): __vis.ITimeline;
  }

  export interface ITimeline {
      setGroups(groups?: ITimelineGroup[]): void;
      setItems(items?: ITimelineItem[]): void;
      getWindow(): ITimelineWindow;
      setWindow(start: any, date: any): void;
      focus(selection: any): void;
      on(event?: string, callback?: (properties: any) => void): void;
  }

  export interface ITimelineWindow {
      start: Date;
      end: Date;
  }

  export interface ITimelineItem {
      id: number;
      content: string;
      group?: number;
      start: number;
      end?: number;
      editable?: boolean;
  }

  export interface ITimelineOptions {
      stack?: boolean;
      start?: any;
      end?: any;
      orientation?: string;
  }

  export interface ITimelineGroup {
      id: number;
      content: string;
      style?: string;
  }

  export interface IVisSelectProperties {
      items: number[];
  }

  export interface INetwork {
      network?: any;
      selectNodes?(nodeIds: string[], highlightEdges?: boolean): void;
      unselectAll?(): void;
      fit?(): void;
  }

  export interface IPosition {
      x: number;
      y: number;
  }

  export interface IProperties {

    nodes: string[];

    edges: string[];

    event: string[];

    pointer: {
        DOM: IPosition;
        canvas: IPosition;
    };

    previousSelection?: {
        nodes: string[];
        edges: string[];
    };
  }

  export interface Callback {
      callback?: (params?: any) => void;
  }

  export interface Dataset {

  }

  export interface IData {
      nodes?: INode[];
      edges?: IEdge[];
  }

  export interface INode {
      id?: string;
      label?: string;
      x?: number;
      y?: number;
      fixed?: boolean;
      image?: string;
      shape?: string;
  }

  export interface IEdge {
      from?: string;
      to?: string;
      id?: string;
  }

  export interface IOptions {
      autoResize?: boolean;

      width?: string;

      height?: string;

      locale?: string;

      locales?: string[];

      clickToUse?: boolean;

      configure?: any; // http://visjs.org/docs/network/configure.html#

      edges?: IEdgeOptions;

      nodes?: INodeOptions;

      groups?: any;

      layout?: any; // http://visjs.org/docs/network/layout.html

      interaction?: any; // visjs.org/docs/network/interaction.html?keywords=edges

      manipulation?: any; // http://visjs.org/docs/network/manipulation.html#

      physics?: any; // http://visjs.org/docs/network/physics.html#
  }

  export interface INodeOptions {
    borderWidth?: number;

    boderWidthSelected?: number;

    brokenImage?: string;

    color?: {
        border?: string,
        background?: string,
        highlight?: string | {
            border?: string,
            background?: string,
        },
        hover?: string | {
            border?: string,
            background?: string,
        }
    };

    fixed?: boolean | {
        x?: boolean,
        y?: boolean,
    };

    font?: string | {
        color: string,
        size: number, // px
        face: string,
        background: string,
        strokeWidth: number, // px
        strokeColor: string,
        align: string,
    };

    group?: string;

    hidden?: boolean;

    icon?: {
        face?: string,
        code?: string,
        size?: number,  //50,
        color?: string,
    };

    id?: string;

    image?: string;

    label?: string;

    labelHighlightBold?: boolean;

    level?: number;

    mass?: number;

    physics?: boolean;

    scaling?: IOptionsScaling;

    shadow?: boolean | IOptionsShadow;

    shape?: string;

    shapeProperties?: {
        borderDashes: boolean | number[], // only for borders
        borderRadius: number,     // only for box shape
        interpolation: boolean,  // only for image and circularImage shapes
        useImageSize: boolean,  // only for image and circularImage shapes
        useBorderWithImage: boolean  // only for image shape
    };

    size?: number;

    title?: string;

    value?: number;

    x?: number;

    y?: number;
  }

  export interface IEdgeOptions {
    arrows?: string | {
        to?: boolean | {
            enabled?: boolean,
            scaleFactor?: number,
        },
        middle?: boolean | {
            enabled?: boolean,
            scaleFactor?: number,
        },
        from: boolean | {
            enabled?: boolean,
            scaleFactor?: number,
        }
    };

    arrowStrikethrough?: boolean;

    color?: string | {
        color?: string,
        highlight?: string,
        hover?: string,
        inherit?: boolean | string,
        opacity?: number,
    };

    dashes?: boolean | number[];

    font?: string | {
        color?: string,
        size?: number, // px
        face?: string,
        background?: string,
        strokeWidth?: number, // px
        strokeColor?: string,
        align?: string,
    };

    from?: number | string;

    hidden?: boolean;

    hoverWidth?: number; // please note, hoverWidth could be also a function. This case is not represented here

    id?: string;

    label?: string;

    labelHighlightBold?: boolean;

    length?: number;

    physics?: boolean;

    scaling?: IOptionsScaling;

    selectionWidth?: number; // please note, selectionWidth could be also a function. This case is not represented here

    selfReferenceSize?: number;

    shadow?: boolean | IOptionsShadow;

    smooth?: boolean | {
        enabled: boolean,
        type: string,
        forceDirection?: string | boolean,
        roundness: number,
    };

    title?: string;

    to?: number | string;

    value?: number;

    width?: number;
  }

  export interface IOptionsScaling {
    min?: number;
    max?: number;
    label?: boolean | {
        enabled?: boolean,
        min?: number,
        max?: number,
        maxVisible?: number,
        drawThreshold?: number
    };
    customScalingFunction?(min?: number, max?: number, total?: number, value?: number): number;
  }

  export interface IOptionsShadow {
    enabled: boolean;
    color: string;
    size: number;
    x: number;
    y: number;
  }

  export interface IEvents {
    click?(properties?: IProperties): void;

    doubleClick?(properties?: IProperties): void;

    oncontext?(properties?: IProperties): void;

    hold?(properties?: IProperties): void;

    release?(properties?: IProperties): void;

    select?(properties?: IProperties): void;

    selectNode?(properties?: IProperties): void;

    selectEdge?(properties?: IProperties): void;

    deselectNode?(properties?: IProperties): void;

    deselectEdge?(properties?: IProperties): void;

    dragStart?(properties?: IProperties): void;

    dragging?(properties?: IProperties): void;

    dragEnd?(properties?: IProperties): void;

    hoverNode?(node?: string): void;

    blurNode?(node?: string): void;

    hoverEdge?(node?: string): void;

    blurEdge?(node?: string): void;

    zoom?(node?: string): void;

    showPopup?(node?: string): void;

    hidePopup?(node?: string): void;

    startStabilizing?(): void;

    stabilizationProgress?(properties?: {
        iterations?: number,
        total?: number,
    }): void;

    stabilizationIterationsDone?(): void;

    stabilized?(properties?: {
        iterations?: number,
    }): void;

    resize?(properties?: {
        width: number,
        height: number,
        oldWidth: number,
        oldHeight: number,
    }): void;

    initRedraw?(): void;

    beforeDrawing?(canvasContext?: any): void;

    afterDrawing?(canvasContext?: any): void;

    animationFinished?(): void;

    configChange?(properties?: any): void;
  }
}

declare module 'vis' {
  export = __vis;
}

declare namespace moment {
    interface Moment {
    }
}