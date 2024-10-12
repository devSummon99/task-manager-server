import { Route, Routes } from "react-router-dom";
import CompletedTasks from "../pages/CompletedTasks";
import DeletedTasks from "../pages/DeletedTasks";
import PendingTasks from "../pages/PendingTasks";
import AllTasks from "../pages/AllTasks";
import Header from "../components/Header";

export default function TaskManagerRoute() {
  return (
<>
<Header/>
    <Routes>
      <Route path="/tasks/completed" element={<CompletedTasks />} />
      <Route path="/tasks/deleted" element={<DeletedTasks />} />
      <Route path="/tasks/pending" element={<PendingTasks />} />
      <Route path="/" element={<AllTasks />} />
    </Routes>
</>
  );
}
