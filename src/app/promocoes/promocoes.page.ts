import { Component, OnInit } from '@angular/core';
import { BdtempService} from '../services/bdtemp.service'

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  listaProdutos = [
  {
    nome: "Moletom Goku Balenciaga", 
    descricao:"Moletom do Goku Balenciaga Oficial", 
    valor:950
  },
  {
    nome:"Brincos Hanafuda",
    descricao:"Ideal para dias de sol",
    valor:40
  },
  {
    nome:"Caneca One Piece",
    descricao:"Perfeita para longas viagens",
    valor:60
  },
  {
    nome:"Caneca Tokyo Ghoul",
    descricao:"Aceita apenas café",
    valor:60
  },
  {
    nome:"Figure Nezuko",
    descricao:"Ela tem sono",
    valor:230
  }
  
] ;
  constructor(public bdtemp: BdtempService) {}

  ngOnInit() {
  }

  addProdutoCarrinho(produto:any){
    this.bdtemp.addProdutoCarrinho(produto);
  }
}
