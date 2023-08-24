import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdtempService {

  private bd: any = [];

  constructor() { }

  salvar(chave: string, valor: any){
    if(chave.trim()){
      this.bd[chave] = valor;
      return true;
    }
    return false;
  }

  buscar(chave: string){
    if(chave.trim()){
      return this.bd[chave];
    }
    return null;
  }

  deletar(chave: string){
    if(chave.trim()){
      delete this.bd[chave];
      return true;
    }
    return null;
  }

  addProdutoCarrinho(produto:any){
    // Verifica se ja existe um carrinho
    if(!this.bd['carrinho']){// Se Não (!)
      this.bd['carrinho'] = []; // Cria um carrinho vazio
    }
    if(produto){ // Verifica se produto é um var válida
      this.bd['carrinho'].push(produto); // Add no final do array
    }

    console.log("Carrinho: ", this.bd['carrinho']);
  }

  removeProdutoCarrinho(posicao: number){
    this.bd['carrinho'].splice(posicao, 1);
  }

  limparCarrinho(){
    this.bd['carrinho'] = [];
  }
}