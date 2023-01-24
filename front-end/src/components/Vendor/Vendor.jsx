import React from 'react'
import { useLocation,useParams } from "react-router-dom";
export default function Vendor() {
const id =useParams()
  console.log('id',id);
  return (
    <div>Hello {id.vendor}</div>
  )
}
