import React, { Component } from 'react'

const tableData = [
  {
      id:'245',
      fullName:'Ánh Nguyên Nghị',
      email:'vi.vy@hotmail.com',
      dateOfBirth:'22/04/2000',
      gender:'men',
      level:'AB',
      type:'Student',
      status:'in class',
  }
];

export default class Table extends Component {
  render() {
    return (
      <div>
        <div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                        <th>Level</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                  {tableData.map(item => (
                    <tr></tr>
                  ))}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
