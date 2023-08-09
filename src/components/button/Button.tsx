import {IButtonProps} from "../../../interfaces/interfaces";

export default function Button({ onClick }: IButtonProps) {
    return (
        <button type="button" onClick={(e)=>onClick(e)}>
            get random user
        </button>
    );
}