import { Injectable } from '@nestjs/common';
import { ConsumoEnergia } from './consumo_energia.model';

@Injectable()
export class ConsumoEnergiaService {
    private consumos: ConsumoEnergia[] = [];
    private contadorId = 1;

    registrarConsumo(user: string, qtd: number, dataLeitura: Date): ConsumoEnergia{
        const novoRegistro: ConsumoEnergia = {
            id: this.contadorId++,
            user,
            qtd,
            dataLeitura,
        };
        this.consumos.push(novoRegistro);
        return novoRegistro;
    }

    historicoConsumo(userId: string): ConsumoEnergia[]{
        return this.consumos.filter(c => c.user === userId);
    }

    verificarAlerta(user: string): string | null {
        const historico = this.historicoConsumo(user);
        if(historico.length < 2) return null;

        const ordenado = historico.sort((a, b) => a.dataLeitura.getTime() - b.dataLeitura.getTime());
        const penultimo = ordenado[ordenado.length -2];
        const ultimo = ordenado[ordenado.length - 1];

        if(ultimo.qtd > penultimo.qtd){
            return `⚠️ Alerta: O consumo do mês atual (${ultimo.qtd} kWh) está maior que o anterior (${penultimo.qtd} kWh).`
        }

        return null;
    }

}

