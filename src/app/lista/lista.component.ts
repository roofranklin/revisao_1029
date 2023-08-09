import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent {
  tarefas: string[] = [];
  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push(this.novaTarefa);
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }

}
