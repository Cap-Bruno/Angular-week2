import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment2';

  listToBuy = [
    {
      nome: "Blusa",
      quantidade: "10"
    },
    {
      nome: "Calca",
      quantidade: "2"
    },
    {
      nome: "Meias",
      quantidade: "5"
    },
    {
      nome: "Moletom",
      quantidade: "1"
    },
    {
      nome: "Bolsa",
      quantidade: "2"
    }
  ];

  allBuy = false;
  nothingBuy = true;
  
  trocaColuna = (itemm: object) => {
    //logica pra troca o "li" pro outro lado - itemIndex: number
    this.nothingBuy = false; 
    console.log(this.nothingBuy);
    //this.addItem(itemIndex)
    //Recebe-se o objeto no
    console.log(itemm)
    
    //this.removeItem(itemIndex)
  }
  items: object[] = []
  /*

  addItem = (itemIndex: number) => {
    let item = {
      nome: this.listToBuy[itemIndex].nome,
      quantidade: this.listToBuy[itemIndex].quantidade
    }
    this.items.push(item);
  }

  getItems = () => {
    return this.items;
  }
  */
  removeItem = (itemIndex: number) => {
    this.items.splice(itemIndex, 1)
  }
}
