function classnamed(template, ...args) {
  const classes = []
  const hasArgs = args.length > 0

  for (let i = 0; i < template.length; i++) {
    const part = template[i].trim()
    if (part.length > 0) {
      classes.push(part)
    }

    if (hasArgs && i < args.length) {
      const fn = args[i]
      classes.push(fn('prop' + i).trim())
    }
  }

  console.info(classes.join(" "))
}

classnamed`bg-white flex ${(p) => `test-` + p} flex-1 ${(p) => p}`
classnamed`flex`
classnamed`flex ${p => p}`
classnamed`${p => p}`
classnamed`${p => p} test`