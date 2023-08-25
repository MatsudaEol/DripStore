import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service'

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "Moletom Goku Balenciaga",
      descricao: "Moletom do Goku Balenciaga Oficial",
      valor: 950,
      foto: 'assets/img/goku.png'
    },
    {
      nome: "Brincos Hanafuda",
      descricao: "Ideal para dias de sol",
      valor: 40,
      foto: 'assets/img/brincokimetsu.jpg'
    },
    {
      nome: "Caneca One Piece",
      descricao: "Perfeita para longas viagens",
      valor: 60,
      foto: 'assets/img/canecaone.png'
    },
    {
      nome: "Caneca Tokyo Ghoul",
      descricao: "Aceita apenas café",
      valor: 60,
      foto: 'assets/img/canecatg.png'
    },
    {
      nome: "Figure Nezuko",
      descricao: "Ela tem sono",
      valor: 230,
      foto: 'assets/img/figurenezuko.webp'
    }

  ];
  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any) {
    this.bdtemp.addProdutoCarrinho(produto);
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho() {
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');

  }
}
