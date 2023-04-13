declare module "*.svg" {
   import React from 'react';
   import { SvgProps } from "react-native-svg";
   const content: React.FC<SvgProps>;
   export default content;
 }
 declare module '*.jpg';
 declare module 'react-native-config' {
  export interface NativeConfig {
    [name: string]: any
  }
  export const Config: NativeConfig
  export default Config
}