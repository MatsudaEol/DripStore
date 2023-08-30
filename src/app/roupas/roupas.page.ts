import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-roupas',
  templateUrl: './roupas.page.html',
  styleUrls: ['./roupas.page.scss'],
})
export class RoupasPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaRoupas = [
    {
      nome: "Moletom Supremo Goku Balenciaga", 
      descricao: "Este moletom icônico combina o poderoso herói Goku com a elegância da marca Balenciaga. Feito com materiais premium para proporcionar conforto e estilo incomparáveis.",
      valor: 9421,
      imagem: "assets/img/goku.png",
      promocao: false
    },
    {
      nome: "Blusa Urban Adidas Lee - Edição Limitada", 
      descricao: "A Blusa Adidas Lee é uma verdadeira obra-prima da moda esportiva. Com um design exclusivo de edição limitada, é a escolha perfeita para os aficionados por estilo e qualidade.",
      valor: 235,
      imagem: "assets/img/lee.jpg",
      promocao: true
    },
    {
      nome: "Blusa Killua Nike Premium", 
      descricao: "Apresentamos a Blusa Killua Nike, que une a ousadia do personagem Killua com a renomada qualidade da Nike. Feita com 100% algodão premium para oferecer o máximo conforto.",
      valor: 149,
      imagem: "assets/img/kilua.jfif",
      promocao: true
    },
    {
      nome: "Jaqueta Giorno Autografada - Edição Especial", 
      descricao: "A Jaqueta Giorno é uma peça verdadeiramente rara e especial, autografada pelo próprio Giorno Giovanna. Feita com materiais de alta qualidade, é a escolha dos verdadeiros fãs.",
      valor: 3200,
      imagem: "assets/img/giorno.jpg",
      promocao: false
    },
    {
      nome: "Terno Kira - Elegância Única", 
      descricao: "O Terno Kira é sinônimo de elegância e sofisticação. Acompanhado pela icônica gravata Killer Queen, ambos feitos com 100% algodão premium para um ajuste perfeito.",
      valor: 985,
      imagem: "assets/img/kira.jpg",
      promocao: false
    },
    {
      nome: "Moletom Drip Goku - Estilo Urbano Premium", 
      descricao: "O Moletom Drip Goku é um tesouro para os entusiastas de moda urbana. Seu design exclusivo apresenta detalhes de 'molho', tornando-o uma peça única e estilosa.",
      valor: 15978,
      imagem: "assets/img/dripgoku.jpg",
      promocao: false
    },
    {
      nome: "Máscara Nezuko Prada - Moda e Proteção", 
      descricao: "A Máscara Nezuko Prada é uma combinação perfeita de moda e proteção. Feita com materiais de alta qualidade, oferece conforto e estilo para o uso diário.",
      valor: 421,
      imagem: "assets/img/nezuko.jpg",
      promocao: true
    }
  ];

  filteredRoupas = this.listaRoupas
  constructor(public bdtemp:BdtempService ) { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredRoupas = this.listaRoupas.filter((roupa) => {
      return roupa.nome.toLowerCase().includes(searchTerm) ||
             roupa.descricao.toLowerCase().includes(searchTerm);
    });
  }

  addProdutoCarrinho(produto: any) {
    this.bdtemp.addProdutoCarrinho(produto);
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho() {
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');

  }
  
  ionViewWillEnter() {
    this.buscarDadosCarrinho();
  }
  
}