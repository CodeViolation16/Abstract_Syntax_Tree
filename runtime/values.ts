export type ValueType = "null" | "number";
export interface RuntimeVal {
  type: ValueType;
}

export interface NullVal extends RuntimeVal {
  type: ValueType;
  value: "null";
}

export interface NumberVal extends RuntimeVal {
  type: "number";
  value: number;
}
