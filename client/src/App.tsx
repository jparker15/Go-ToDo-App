import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Box, Button, List, ThemeIcon } from '@mantine/core';
import useSWR from 'swr';
import AddToDo from './components/AddToDo';
import { CheckCircleFillIcon } from '@primer/octicons-react';

export interface Todo{
  id:number;
  title:string;
  body:string;
  done:boolean;

}

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) =>
 fetch(`${ENDPOINT}/${url}`).then((r)=> r.json());

function App() {

  const {data, mutate } = useSWR<Todo[]>('api/todos', fetcher);

  async function markToDoAndDone(id: number){
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/done`,{
      method:"PATCH"
    }).then((r) => r.json());

    mutate(updated)
  }

  return (
    <Box sx={(theme)=>({
        padding: "2rem",
        width:"100%",
        maxWidth:"40rem",
        margin: "0 auto",
        background:"white"
      })}
    >
      <List spacing="xs" size="sm" mb={12} center>
        {data?.map((todo) =>{
          return <List.Item onClick={() => markToDoAndDone(todo.id)} key={`todo__${todo.id}`} 

            icon={
              todo.done ? (
              <ThemeIcon color="lightpink" size={24} radius="xl">
                <CheckCircleFillIcon size={20}/>
              </ThemeIcon>
              ):(
              <ThemeIcon color="gray" size={24} radius="xl">
                <CheckCircleFillIcon size={20}/>
              </ThemeIcon>
              )            
            }

            >{todo.title}
          </List.Item>
        })}
      </List>
      <AddToDo mutate = {mutate}/>
    </Box>  
  );
}

export default App;
