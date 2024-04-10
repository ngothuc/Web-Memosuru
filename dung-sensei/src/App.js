import './App.css';
import { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material'

export default function App() {

  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setItem(data);
    })
  },  []);

  return(
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>USerID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.userId}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}