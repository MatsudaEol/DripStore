import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canecas',
  templateUrl: './canecas.page.html',
  styleUrls: ['./canecas.page.scss'],
})
export class CanecasPage implements OnInit {

  listaCanecas = [
    {
      nome: "Caneca Shinobi",
      descricao: "Mostre seu estilo com a caneca do Naruto",
      valor: 45,
      imagem: "../../assets/img/canecanaruto.jfif",
      promocao: true
    },
    {
      nome: "Caneca Aventura Pirata",
      descricao: "Acompanhe Luffy em suas jornadas com esta caneca",
      valor: 60,
      imagem: "../../assets/img/canecaone.png",
      promocao: false
    },
    {
      nome: "Caneca Ghoul",
      descricao: "Desfrute de seu café como um verdadeiro ghoul",
      valor: 45,
      imagem: "../../assets/img/canecatg.png",
      promocao: true
    },
    {
      nome: "Caneca Death Note",
      descricao: "Preste atenção, você decide o que escrever",
      valor: 60,
      imagem: "../../assets/img/canecadeat.webp",
      promocao: false
    },
    {
      nome: "Caneca Kamehameha",
      descricao: "Carregue sua energia com esta caneca do Dragon Ball",
      valor: 60,
      imagem: "../../assets/img/canecadragon.jpg",
      promocao: false
    },
    {
      nome: "Caneca Bizarrice",
      descricao: "Uma caneca para os fãs de JoJo's Bizarre Adventure",
      valor: 60,
      imagem: "../../assets/img/canecajojo.jfif",
      promocao: false
    },
    {
      nome: "Caneca Soul Reaper",
      descricao: "Desperte seu poder com esta caneca do Ichigo",
      valor: 45,
      imagem: "../../assets/img/canecaichigo.png",
      promocao: true
    }
  ];

  filteredCanecas = this.listaCanecas;
    
  constructor() { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCanecas = this.listaCanecas.filter((caneca) => {
      return caneca.nome.toLowerCase().includes(searchTerm) ||
             caneca.descricao.toLowerCase().includes(searchTerm);
    });
  }
}