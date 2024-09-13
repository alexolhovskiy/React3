import { Button,TextField,Box,Card,CardContent,Typography,CardActions} from "@mui/material";
import { useState } from 'react'

export const TodoList=()=>{
    const [t_list,setList]=useState([]);
    const [task,setTask]=useState("");

    const getText=(e)=>{
        setTask(e.target.value);
    }

    const addTask=()=>{
        if(task.trim()==""){
            setTask("");
            return;
        }
        const newList=[...t_list,{id:Date.now(),task:task}];
        
        setList(newList);
        // console.log(t_list);
        setTask("");
    }

    const deleteTask=(id)=>{
        const newList=t_list.filter((item)=>item.id!==id);
        setList(newList);
    }

    return(
        <div className="container">
            <div className="block">
                <TextField sx={{ width: '60vw' }} onChange={getText} value={task}></TextField>
                <Button onClick={addTask}>Add</Button>
                <Box className="mygrid">
                    {t_list.map((item)=>
                        <Card key={item.id}>
                            <CardContent>
                                <Typography variant="body2">{item.task}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={()=>deleteTask(item.id)}>Delete</Button>
                            </CardActions>
                        </Card>  
                    )}
                </Box>
            </div>
        </div>
    );
}