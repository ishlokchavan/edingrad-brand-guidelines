/** Color data for the Color and Data-visualization sections. */

export interface Swatch {
  step: string;
  hex: string;
}

/** Blue carries the brand. Blue 60 is the primary action color. */
export const BLUE_SCALE: Swatch[] = [
  { step: '100', hex: '#001141' },
  { step: '90', hex: '#001d6c' },
  { step: '80', hex: '#002d9c' },
  { step: '70', hex: '#0043ce' },
  { step: '60', hex: '#0f62fe' },
  { step: '50', hex: '#4589ff' },
  { step: '40', hex: '#78a9ff' },
  { step: '30', hex: '#a6c8ff' },
  { step: '20', hex: '#d0e2ff' },
  { step: '10', hex: '#edf5ff' },
];

export const GRAY_SCALE: Swatch[] = [
  { step: '100', hex: '#161616' },
  { step: '90', hex: '#262626' },
  { step: '80', hex: '#393939' },
  { step: '70', hex: '#525252' },
  { step: '60', hex: '#6f6f6f' },
  { step: '50', hex: '#8d8d8d' },
  { step: '40', hex: '#a8a8a8' },
  { step: '30', hex: '#c6c6c6' },
  { step: '20', hex: '#e0e0e0' },
  { step: '10', hex: '#f4f4f4' },
];

export interface ColorFamily {
  label: string;
  chips: { name: string; hex: string }[];
}

/** Core families, each carrying blue, built for combination. */
export const CORE_FAMILIES: ColorFamily[] = [
  {
    label: 'Cool family \u2014 4-colour',
    chips: [
      { name: 'Blue 60', hex: '#0f62fe' },
      { name: 'Cyan 50', hex: '#1192e8' },
      { name: 'Teal 50', hex: '#009d9a' },
      { name: 'Green 50', hex: '#24a148' },
    ],
  },
  {
    label: 'Warm family \u2014 4-colour',
    chips: [
      { name: 'Blue 60', hex: '#0f62fe' },
      { name: 'Purple 60', hex: '#8a3ffc' },
      { name: 'Magenta 50', hex: '#ee5396' },
      { name: 'Red 50', hex: '#fa4d56' },
    ],
  },
];

/** The Carbon 14-step categorical sequence, applied strictly in order. */
export const CATEGORICAL: Swatch[] = [
  { step: '01 \u00b7 Purple 70', hex: '#6929c4' },
  { step: '02 \u00b7 Cyan 50', hex: '#1192e8' },
  { step: '03 \u00b7 Teal 70', hex: '#005d5d' },
  { step: '04 \u00b7 Magenta 70', hex: '#9f1853' },
  { step: '05 \u00b7 Red 50', hex: '#fa4d56' },
  { step: '06 \u00b7 Red 90', hex: '#570408' },
  { step: '07 \u00b7 Green 60', hex: '#198038' },
  { step: '08 \u00b7 Blue 80', hex: '#002d9c' },
  { step: '09 \u00b7 Magenta 50', hex: '#ee538b' },
  { step: '10 \u00b7 Yellow 50', hex: '#b28600' },
  { step: '11 \u00b7 Teal 50', hex: '#009d9a' },
  { step: '12 \u00b7 Cyan 90', hex: '#012749' },
  { step: '13 \u00b7 Orange 70', hex: '#8a3800' },
  { step: '14 \u00b7 Purple 50', hex: '#a56eff' },
];

export interface AlertColor {
  name: string;
  hex: string;
}

export const ALERTS: AlertColor[] = [
  { name: 'Error', hex: '#da1e28' },
  { name: 'Success', hex: '#24a148' },
  { name: 'Warning', hex: '#f1c21b' },
  { name: 'Caution', hex: '#ff832b' },
  { name: 'Info', hex: '#4589ff' },
];

/** Dark-theme surface layers (elevation reads without hard borders). */
export const DARK_SURFACES: { name: string; hex: string; light?: boolean }[] = [
  { name: 'Background', hex: '#161616' },
  { name: 'Layer 01', hex: '#262626' },
  { name: 'Layer 02', hex: '#393939' },
  { name: 'Layer 03', hex: '#525252' },
  { name: 'Interactive', hex: '#0f62fe', light: true },
];
