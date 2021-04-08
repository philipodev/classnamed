/// <reference types="typescript" />

import React, { ComponentType } from "react";

type ClassNamedTemplate = (template: TemplateStringsArray, ...args: any[]) => (props: any) => React.ReactElement<{}, string | React.JSXElementConstructor<any>>;
export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;

type Target = string | ComponentType;

export type ClassNamedTags = {
  [Tag in keyof JSX.IntrinsicElements]: ClassNamedTemplate
}

export interface BaseCreateClassNamed {
  (tag: Target): ClassNamedTemplate
}

export interface CreateClassNamed extends BaseCreateClassNamed, ClassNamedTags {}

declare const classnamed: CreateClassNamed;

export default classnamed;