import * as React from "react";
import { Edit, SimpleForm, TextInput, useInput } from 'react-admin';
import { TextField } from '@material-ui/core'
import SizeTable from '../../components/SizeTable'

const BoundedTextField = props => {
    const {
        input: { name, onChange },
        meta: { touched, error },
        isRequired
    } = useInput(props);
    return (
        <TextField
            name={name}
            label={props.label}
            onChange={onChange}
            error={!!(touched && error)}
            helperText={touched && error}
            required={isRequired}
        />
    );
};

const UserEdit = props => {
    const [myId,setMyId] = React.useState(1)

    const idOnChange = (event:any) => {
        setMyId(event.target.value)
    }
    const nameOnChange = (event:any) => {
        console.log(event.target.value)
    }
    // const onDataChange = (data:any) => {
    //     console.log(data)
    // }
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput label="Id" source="id" onChange={idOnChange} />
                <TextInput label="Name" source="name" onChange={nameOnChange} />
                <BoundedTextField label="Name" source="name" />
                <SizeTable
                    myId={myId}
                    // onDataChange={onDataChange}
                    source="xxxxx"
                />
            </SimpleForm>
        </Edit>
    )
};
export default UserEdit