import { useState } from "react";
import Student from "./Student";
import { Student as StudentProp } from "./types";


type StudentProps = {
    students: StudentProp[];
  };


export default function Grid(props: StudentProps) {

    const { students } = props

    const [studentList, setStudentList] = useState(students ?? []);

    return(
        <article className="grid">
        {studentList.map((key) => 
                <Student key={key.id} name={key.name} id={key.id}/>)}
        </article>
    )
}