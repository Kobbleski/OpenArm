import { useEffect, useState } from "react"
import { getStatus } from "./api/client"

function App() {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await getStatus()
      setStatus(data)
    }

    fetchData()
  }, [])

  return (
    <div style={{ padding: "20px" }}>
      <h1>OpenArm</h1>

      <h3>Backend Status</h3>

      {status ? (
        <pre>{JSON.stringify(status, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App