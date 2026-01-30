import React, { useState,useEffect } from 'react'

const App = () => {
  
  // variables
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState(()=>{
    const saved = localStorage.getItem('tasks')
    return saved? JSON.parse(saved):[]
  })
  // useeffect
  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }, [tasks])
  return (
    <div className='bg-emerald-950 h-screen flex p-7 flex-col items-center '>
      <div className='flex gap-3 w-full h-fit justify-center text-2xl'>
        {/* input box */}
        <input type="text" className='bg-white rounded-2xl' value={task} onChange={(e) => {
          setTask(e.target.value)
        }} />
        <button className='bg-yellow-300 px-7 py-3 rounded-2xl' onClick={() => {
          const old = [...tasks]
          old.push(task)
          setTasks(old)
        }}>Add</button>
      </div>
      {/* tasks */}
      <ul className='mt-14 text-amber-50 list-disc'>
        {tasks.map((e, idx) => {
          // console.log(e)
          return <div key={idx} className='flex m-2 gap-5 justify-between items-center'>
            <li >{e}</li>
            <button className='bg-red-800 px-6 py-1 rounded-md' onClick={()=>{
              const old=[...tasks]
              old.splice(idx,1)
              setTasks(old)
            }}>Remove</button>
          </div>

        })}
      </ul>
    </div>
  )
}

export default App