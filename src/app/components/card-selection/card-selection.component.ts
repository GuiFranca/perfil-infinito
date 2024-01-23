import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-selection',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './card-selection.component.html',
  styleUrl: './card-selection.component.scss'
})
export class CardSelectionComponent {

  categoria: string = 'Exemplo'; // Ajuste conforme necessário
  tema: string = 'Exemplo'; // Ajuste conforme necessário
  dicas: string[] = new Array(20).fill(null); // Substitua com as dicas reais

  selecionarDica(index: number): void {
    // Lógica para lidar com a seleção de dica
    console.log(`Dica ${index + 1} selecionada`);
  }

  revelarResposta(): void {
    // Lógica para revelar a resposta
    console.log('Resposta revelada');
  }
}
