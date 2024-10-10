import { Routes, Route } from "react-router-dom"
import CompletedTasks from "../pages/CompletedTasks"
import DeletedTasks from "../pages/DeletedTasks"
import PendingTasks from "../pages/PendingTasks"
import AllTasks from "../pages/AllTasks"

export default function TaskManagerRoute() {
  return (
    <Routes>
    <Route path="/completed" element={<CompletedTasks />} />
    <Route path="/deleted" element={<DeletedTasks />} />
    <Route path="/pending" element={<PendingTasks />} />
    <Route path="/" element={<AllTasks />} />
  </Routes>
  )
}

