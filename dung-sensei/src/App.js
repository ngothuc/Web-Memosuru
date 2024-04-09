import './App.css';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const orders = [
  {
    id: "ORD001",
    customerId: "C001",
    date: "2021-03-21",
  },
  {
    id: "ORD002",
    customerId: "C002",
    date: "2021-03-11",
  },
  {
    id: "ORD003",
    customerId: "C003",
    date: "2021-06-14",
  },
];

export default function App() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{ width: "500px", borderStyle: "solid", borderWidth: "1px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>CustomerID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerId}</TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

