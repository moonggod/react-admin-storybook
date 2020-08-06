// in src/posts.js
import * as React from "react";
import { useMediaQuery, Theme } from '@material-ui/core'
import { List, Datagrid, SimpleList, TextField, ReferenceField, EditButton, Filter, TextInput, ReferenceInput, SelectInput } from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const PostList = props => {
    const isSmall = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));
    return (
        <List filters={<PostFilter />} {...props}>
            {
                isSmall ? (
                    <SimpleList
                        primaryText={record => record.title}
                        secondaryText={record => `${record.body} views`}
                        tertiaryText={record => record.userId}
                    />
                ) : (
                    <Datagrid>
                        <TextField source="id" />
                        <ReferenceField source="userId" reference="users">
                            <TextField source="name" />
                        </ReferenceField>
                        <TextField source="title" />
                        <TextField source="body" />
                        <EditButton />
                    </Datagrid>
                )
            }
        </List>
    )
}

export default PostList