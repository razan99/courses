import React from 'react';
import Navbar from '../../components/course/navbar';
import Addnewcourse from '../../components/newcourse/addcourse'
import './main.css'

export default class Newcourse extends React.Component {
  render() {
    return (
      <div className='new-course'>
        <Navbar />
        <Addnewcourse />
      </div>
    )
  }
};