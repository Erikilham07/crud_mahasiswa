//import axios from "axios";
import React, { Component } from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";

export default class Crud extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          mahasiswa: [],
          nama: "",
          nim: "",
          prodi: "",
          umur: "",
          alamat: "",
          no: "",
        };
      }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };


    handleSubmit = async (event) => {
        event.preventDefault();
            //     const { data } = await axios.post(`http://localhost:8077/create`, 
            //     {
            //     name : this.state.nama,
            //     nim : this.state.nim,
            //     prodi : this.state.prodi,
            //     age : parseInt(this.state.umur),
            //     address : this.state.alamat
            //     });
            // }
        if (this.state.id === "") {  
        this.setState({
            mahasiswa: [
              ...this.state.mahasiswa,
              {
                no: this.state.mahasiswa.length + 1,
                nama: this.state.nama,
                nim: this.state.nim,
                prodi: this.state.prodi,
                umur: this.state.umur,
                alamat: this.state.alamat,
              },
            ],
          });
        }else{
            const mahasiswaYangSelainDiPilih = this.state.mahasiswa
            .filter((mahasiswa) => mahasiswa.no !== this.state.no)
            .map((filterMahasiswa) => {
             return filterMahasiswa;
             });
        this.setState({
                mahasiswa: [
                  ...mahasiswaYangSelainDiPilih,
                  {
                    no: this.state.mahasiswa.length + 1,
                    nama: this.state.nama,
                    nim: this.state.nim,
                    prodi: this.state.prodi,
                    umur: this.state.umur,
                    alamat: this.state.alamat,
                  },
                ],
            });
        }
    
        this.setState({
            nama: "",
            nim: "",
            prodi: "",
            umur: "",
            alamat: "",
            no: "",
        });
      };

    editData = (no) => {
    const mahasiswaYangDiPilih = this.state.mahasiswa
      .filter((mahasiswa) => mahasiswa.no === no)
      .map((filterMahasiswa) => {
        return filterMahasiswa;
      });

    this.setState({
      nama: mahasiswaYangDiPilih[0].nama,
      nim: mahasiswaYangDiPilih[0].nim,
      prodi: mahasiswaYangDiPilih[0].prodi,
      umur: mahasiswaYangDiPilih[0].umur,
      alamat: mahasiswaYangDiPilih[0].alamat,
      no: mahasiswaYangDiPilih[0].no,
    });
      };

    render() {
        return (
        <div>
            <NavbarComponent />
            <div className="container mt-4">
                <Tabel mahasiswa={this.state.mahasiswa} editData={this.editData}/>
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        </div>
        )
    }

}