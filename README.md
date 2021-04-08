# classnamed

A slim and simple utility to make components with just classnames.

```JSX
import classnamed from 'classnamed'

const Box = classnamed.div`p-5 bg-white rounded shadow mb-2`
const DarkerBox = classnamed(Box)`bg-gray-800 text-white`

export function MyApp(){
  return (<div>
      <Box />
      <DarkerBox />
    </div>)
}
```