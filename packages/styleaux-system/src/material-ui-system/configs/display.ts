export const displayRawConfig = {
  prop: "display"
};

export const displayPrintConfig = {
  prop: "displayPrint",
  transform: value => ({
    "@media print": {
      display: value
    }
  })
};

export const displayConfig = [displayRawConfig, displayPrintConfig];
