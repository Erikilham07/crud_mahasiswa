import React from 'react';
import { Table } from 'react-bootstrap';

const Tabel = ({mahasiswa, editData}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Nim</th>
          <th>Prodi</th>
          <th>Umur</th>
          <th>Alamat</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {mahasiswa.map((mahasiswa, index) => {
            return (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.prodi}</td>
                <td>{mahasiswa.umur}</td>
                <td>{mahasiswa.alamat}</td>
                <td>
                    <button className="btn btn-warning mr-2" onClick={() => editData(mahasiswa.no) }>Edit</button>
                </td>
                </tr>
            )
        })}
      </tbody>
    </Table>
  );
}

export default Tabel