import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function AppRusume() {
  return (
    <>

    <Link to="/formRusume"> 
    <Button>Create Rusume</Button>
    </Link>
    <Link to="/managementRusume"> 
    <Button>View All Resumes </Button>
    </Link>

    </>
  )
}
