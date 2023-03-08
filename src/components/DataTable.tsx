import Drawer from "./Drawer";
import { useState } from 'react'
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from "../custom-hooks/FetchData";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const columns: GridColDef[]= [
    {field: 'id', headerName: "ID", width:90, hideable:true },
    {field: 'brand', headerName: 'Brand', flex:1},
    {field: 'type', headerName: 'Type', flex:1},
    {field: 'abv', headerName: 'ABV', flex:1},
    {field: 'ibu', headerName: 'IBU', flex:2}
]


function DataTable() {
    const [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ]= useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose= () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()},500)
    }

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80')] bg-cover h-screen">
        
        <Drawer
            id={selectionModel}
            
         />
        
        <div className={ open ? "hidden": "container mx-10 my-5 flex flex-col bg-white"}
            style={{ height:400, width: '100%' }}>
            <h2 className="p-3 bg-[#38b6ff] my-2 rounded text-white text-xl">Dashboard</h2>
            <DataGrid rows={contactData} columns={columns} pageSizeOptions={[5]}
            checkboxSelection={true}
            onRowSelectionModelChange={ (item:any) =>{
                setSelectionModel(item)
            }}
            />
        </div>
        <button onClick={deleteData} className="p-3 bg-[#38b6ff] rounded m-3 hover:bg-red-500 hover:text-white">Delete</button>
    </div>
  )
}
export default withAuthenticationRequired(DataTable)