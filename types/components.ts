export interface appInput {
  label: string;
  value?: string;
  triggerChange: (e: any) => void;
  loading?: boolean;
  type: string;
}
export interface appButton {
  label: string;
  triggerClick: () => void;
  loading?: boolean;
}
