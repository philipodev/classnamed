export function classname(template: string, args: any[], props: any): string[] {
  const classes = []
  const hasArgs = args.length > 0

  for (let i = 0; i < template.length; i++) {
    const part = template[i].trim()
    if (part.length > 0) {
      classes.push(
        part
          .split('\n')
          .map((p) => p.trim())
          .join(' ')
      )
    }

    if (hasArgs && i < args.length) {
      const arg = args[i]
      let value = arg
      if (typeof value === 'function') {
        value = arg(props)
      }

      if(!(typeof value === "string")){
        console.error("closure in classnamed did not return a string");
      } else {
        classes.push(value.trim())
      }
    }
  }

  return classes;
}
