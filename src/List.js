import DeleteIcon from "@material-ui/icons/Delete"
import { useState } from "react"

const List = (props) => {
    const [line, setLine] = useState(false);


    const cutIt = () => {
        setLine(true)
    };

    return (
        <div className="todo_style">
            <span onClick={cutIt}>
                <DeleteIcon className="deleteIcon" />
            </span>
        </div>
    )
}

export default List;