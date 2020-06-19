interface Window {
  [key: string]: any;
  [key: string]: (containerId: string) => void;
}
