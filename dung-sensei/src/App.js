import './App.css';
import { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material'

export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => {
      setItems(data);
    })
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>PostID</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow>
              <TableCell>{item.postId}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}