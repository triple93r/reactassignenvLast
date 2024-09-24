import React, { Component } from 'react';

// Define the type for the data prop
type Person = {
  id: number;
  name: string;
  age: number;
};

type DataTableProps = {
  data: Person[]; // Expect an array of Person objects
};
//testing
class DataTable extends Component<DataTableProps> {
  render() {
    const { data } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DataTable;
