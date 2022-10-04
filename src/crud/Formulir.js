import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = ({nama, nim, prodi, umur, alamat, handleChange, handleSubmit, id}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data Mahasiswa" }</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nama">
              <Form.Label>Nama Mahasiswa</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="nim">
              <Form.Label>NIM Mahasiswa</Form.Label>
              <Form.Control
                type="text"
                name="nim"
                value={nim}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="prodi">
              <Form.Label>Prodi Mahasiswa</Form.Label>
              <Form.Control
                type="text"
                name="prodi"
                value={prodi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="umur">
              <Form.Label>Umur Mahasiswa</Form.Label>
              <Form.Control
                type="number"
                name="umur"
                value={umur}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="alamat">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="alamat"
                value={alamat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;