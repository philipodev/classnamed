import { construct } from "./constructor";
import domElements from "./domElements";
import { Target } from "./types";

type ClassNamedTemplate = (template: TemplateStringsArray, ...args: any[]) => (props: any) => React.ReactElement<{}, string | React.JSXElementConstructor<any>>;

export interface ClassNamed {
  (tag: Target): ClassNamedTemplate
  [key: string]: ClassNamedTemplate
}

const classnamed: ClassNamed = ((tag: Target) => construct(tag)) as any;

domElements.forEach(domElement => {
  classnamed[domElement] = classnamed(domElement);
})

export default classnamed;