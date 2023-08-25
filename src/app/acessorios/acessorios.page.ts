import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.page.html',
  styleUrls: ['./acessorios.page.scss'],
})
export class AcessoriosPage implements OnInit {

  listaAcessorios = [
    {
      nome: "Chapéu Scouting Legion",
      descricao: "Mostre seu estilo enquanto enfrenta Titans",
      valor: 245,
      imagem: "../../assets/img/chapeuaot.jpg",
      promocao: false
    },
    {
      nome: "Brincos Hanafuda",
      descricao: "Brincos elegantes inspirados em padrões tradicionais japoneses",
      valor: 40,
      imagem: "../../assets/img/brincokimetsu.jpg",
      promocao: true
    },
    {
      nome: "Colar Clover Grimoire",
      descricao: "Um colar mágico com design único, perfeito para feiticeiros",
      valor: 54,
      imagem: "../../assets/img/colarbc.jpg",
      promocao: false
    },
    {
      nome: "Anel Hokage",
      descricao: "Um anel exclusivo para os líderes mais poderosos",
      valor: 49,
      imagem: "../../assets/img/anelnaruto.jfif",
      promocao: false
    },
    {
      nome: "Boné de Estrela",
      descricao: "Um boné estiloso usado por um famoso delinquente",
      valor: 249,
      imagem: "../../assets/img/bonejotaro.jpeg",
      promocao: false
    },
    {
      nome: "Óculos da Infinidade",
      descricao: "Óculos com lentes especiais para quem enxerga além das aparências",
      valor: 149,
      imagem: "https://ae04.alicdn.com/kf/Hc197217688b1482780a2c0f82a3bee350.jpg",
      promocao: false
    },
    {
      nome: "Brinco Berserk",
      descricao: "Brincos que refletem a fúria interior e o estilo único",
      valor: 40,
      imagem: "../../assets/img/brincoberserk.jpg",
      promocao: true
    }
  ];

  filteredAcessorios = this.listaAcessorios

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredAcessorios = this.listaAcessorios.filter((acessorio) => {
      return acessorio.nome.toLowerCase().includes(searchTerm) ||
             acessorio.descricao.toLowerCase().includes(searchTerm);
    });
  }
}