import Avatar from "./Avatar";
import { Student as StudentProp} from "./types";


export default function Student(props: StudentProp) {

    const { id, name } = props;

    return(
        <div>
            <Avatar name={name}/>
            <p>{name}</p>
        </div>

    )
}