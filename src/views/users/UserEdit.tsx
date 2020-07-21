import * as React from "react";
import { Edit, SimpleForm, TextInput } from 'react-admin';
import SizeTable from '../../components/SizeTable'

const UserEdit = props => {

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput label="Id" source="id" />
                <TextInput label="Name" source="name" />
                <TextInput label="Name" source="name" />
                <SizeTable/>
            </SimpleForm>
        </Edit>
    )
};
export default UserEdit