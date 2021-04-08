import { createElement } from 'react'
import { classname } from './classname'
import { Target } from './types'

export function construct(tag: Target) {
  return function (template: string, ...args: any[]) {
    return (props: any) => {
      const className = classname(template, args, props)
      if (props.className) className.push(props.className)

      return createElement(tag, {
        ...props,
        className: className.join(' '),
      })
    }
  }
}
