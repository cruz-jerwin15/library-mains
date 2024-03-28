import React from 'react'
import AddStudent from '../AddStudent/AddStudent'
import DisplayStudent from '../DisplayStudent/DisplayStudent'
import Navigation from '../../Navigation/Navigation'

export default function StudentPage() {
  return (
    <>
    <Navigation/>
    <AddStudent/>
    <DisplayStudent/>
    </>
  )
}
