import {useState} from 'react';
import { useForm } from '@mantine/form';
import {Button, Group, Modal} from '@mantine/core'
import React from 'react';


function AddToDo(){
    const [open, setOpen] = useState(false);


    const form = useForm({
        initialValues:{
            title:"",
            body:"",
        },
    })

    return( 
        <>
            <Modal opened={open} onClose={() => setOpen(false)} title="Create ToDo"> 
                text
            </Modal>

            <Group position='center'>
                <Button fullWidth mb={12} onClick={() => setOpen(true)}>
                    ADD TODO
                </Button>

            </Group>
        </>
    ); 
}

export default AddToDo;
