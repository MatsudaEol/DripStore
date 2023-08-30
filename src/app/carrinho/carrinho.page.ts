import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

interface Produto {
  foto: string;
  nome: string;
  descricao: string;
  valor: number;
}

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  qtdeItensCarrinho = 0;
  listaItens: Produto[] = []; // Definindo o tipo do array como Produto[]

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
    this.buscarItensCarrinho();
  }

  buscarItensCarrinho() {
    this.listaItens = this.bdtemp.buscar('carrinho');
  }

  ionViewWillEnter() {
    this.buscarItensCarrinho();
  }
}