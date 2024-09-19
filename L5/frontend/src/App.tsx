import { useState } from "react";
import Grid from "./components/Grid";
import type { Student as StudentProps } from "./components/types";

const array1 = [
  { id: "1", name: "Jens" },
  { id: "2", name: "Per" },
]

function App() {
  const [students, setStudents] = useState<StudentProps[]>([]);
  
  return (
    <main>
    < Grid students={array1} />
    </main>
);
}

export default App;