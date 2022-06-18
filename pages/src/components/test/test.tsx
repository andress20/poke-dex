import { useEffect, useState } from 'react'

const Test: React.FC = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const data = fetch('api/AllPokemons').then(res => res)
    setData(data)
  }, [])

  return <div>hola</div>
}
export default Test
