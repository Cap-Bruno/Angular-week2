import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment2';

  listToBuy = [
    {
      nome: 'Blusa',
      quantidade: '10',
    },
    {
      nome: 'Calca',
      quantidade: '2',
    },
    {
      nome: 'Meias',
      quantidade: '5',
    },
    {
      nome: 'Moletom',
      quantidade: '1',
    },
    {
      nome: 'Bolsa',
      quantidade: '2',
    },
  ];

  allBuy = false;
  nothingBuy = true;

  trocaColuna = (itemIndex: number) => {
    //logica pra troca o "li" pro outro lado - itemIndex: number
    this.nothingBuy = false;
    console.log(this.nothingBuy);
    console.log(itemIndex);

    this.addItem(itemIndex);
    this.removeItem(itemIndex);
    if (this.listToBuy.length === 0) 
      this.allBuy = true;
  };

  items: {
    nome: string;
    quantidade: string;
  }[] = [];

  addItem = (itemIndex: number) => {
    let items = {
      nome: this.listToBuy[itemIndex].nome,
      quantidade: this.listToBuy[itemIndex].quantidade,
    };
    this.items.push(items);
  };

  getItems = () => {
    return this.items;
  };

  removeItem = (itemIndex: number) => {
    this.listToBuy.splice(itemIndex, 1);
  };
}
