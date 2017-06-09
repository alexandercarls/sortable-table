import React, { Component } from 'react'
import Table from './components/Table'

class App extends Component {

  state = {
    data: [
      {
        id: '1',
        name: 'Mario',
        status: 'Approved',
        note: 'None',
        activeProjects: 13,
      },
      {
        id: '2',
        name: 'Toad',
        status: 'Approved',
        note: 'Requires Call',
        activeProjects: 4,
      },
      {
        id: '3',
        name: 'Luigi',
        status: 'Denied',
        note: 'None',
        activeProjects: 10,
      },
    ],
  }

  render() {
    const { data: list } = this.state

    return (
      <div className='ui container' style={{ marginTop: 60 }}>
        <Table list={list} />
      </div>
    )
  }
}

export default App
