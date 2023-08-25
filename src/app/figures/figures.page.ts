import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.page.html',
  styleUrls: ['./figures.page.scss'],
})
export class FiguresPage implements OnInit {

  listaFigures = [
    {
      nome: "Figure Nezuko",
      descricao: "Ela tem sono",
      valor: 225, 
      imagem: "../../assets/img/figurenezuko.webp",
      promocao: false
    },
    {
      nome: "Figure Vegeta",
      descricao: "Terrível contra insetos",
      valor: 270, 
      imagem: "../../assets/img/figuredra.webp",
      promocao: false
    },
    {
      nome: "Figure Law",
      descricao: "Feita com o Corazon",
      valor: 180, 
      imagem: "../../assets/img/figurelaw.webp",
      promocao: false
    },
    {
      nome: "Figura Kakashi",
      descricao: "Não é uma cópia",
      valor: 150, 
      imagem: "../../assets/img/figurekaka.jpg",
      promocao: false
    },
    {
      nome: "Figure Inumaki",
      descricao: "Salmão",
      valor: 135, 
      imagem: "../../assets/img/figuresal.jpg",
      promocao: true
    },
    {
      nome: "Figure Zoro",
      descricao: "Ela se perdeu no caminho",
      valor: 210, 
      imagem: "../../assets/img/figurezoro.webp",
      promocao: false
    },
    {
      nome: "Figure Edward",
      descricao: "Não é nada baixinha",
      valor: 165, 
      imagem: "../../assets/img/figureed.jpg",
      promocao: true
    }
  ];

  filteredFigures = this.listaFigures;
  
  constructor() { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredFigures = this.listaFigures.filter((figure) => {
      return figure.nome.toLowerCase().includes(searchTerm) ||
             figure.descricao.toLowerCase().includes(searchTerm);
    });
  }
}