import { Button } from '@/components/$Button'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <Button onPress={() => setCount(count + 1)}>Increment</Button>
    </div>
  )
}
