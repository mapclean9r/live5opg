type avatarProp = {
    name: string;
}

export default function Avatar(prop: avatarProp) {

    const { name } = prop;
    const firstLetter = name.split(" ").join("").toUpperCase().slice(0,1);

return(
    <p className="avatar">{firstLetter}</p>
)
}