import {IUserInfoProps} from "../../../interfaces/interfaces";

export default function UserInfo({ user }: IUserInfoProps) {
   const {name,phone}=user
    return (
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Phone number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{name}</td>
                <td>{phone}</td>
            </tr>
            </tbody>
        </table>
    );
}