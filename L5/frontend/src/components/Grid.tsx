import { useState } from "react";
import Student from "./Student";
import { Student as StudentProp } from "./types";
import AddStudentForm from "./AddStudentForm";


type StudentProps = {
    students: StudentProp[];
  };


export default function Grid(props: StudentProps) {

    const { students } = props;

    const [studentList, setStudentList] = useState(students ?? []);

    const onAddStudent = (student: {name: string}) => {
        setStudentList(prev => [ ... prev,{id: crypto.randomUUID(), ... student}])
    }

    return(
        <section>
            <article className="grid">
                {studentList.map((key) => 
                <Student key={key.id} name={key.name} id={key.id}/>)}
            </article>
        <AddStudentForm onAddStudent={onAddStudent}/>
        </section>
    )
}