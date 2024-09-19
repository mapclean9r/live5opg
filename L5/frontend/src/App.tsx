import Grid from "./components/Grid";

const array1 = [
  { id: "1", name: "Jens" },
  { id: "2", name: "Per" },
]

function App() {
  return (
    <main>
    < Grid students={array1} />
    </main>
);
}

export default App;