import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConsumoEnergiaService } from './consumo_energia.service';
import { CreateConsumoDto } from './dto/create-consumo.dto';
import { HistoricoConsumoDto } from './dto/historico-consumo.dto';
import { AlertaConsumoDto } from './dto/alerta-consumo.dto';

@Controller('consumo')
export class ConsumoEnergiaController{
    constructor(private readonly service: ConsumoEnergiaService){}

    @Post()
    registrar(@Body() dto: CreateConsumoDto) {
        const { user, qtd, dataLeitura } = dto;
        const data = new Date(dataLeitura);
        return this.service.registrarConsumo(user, qtd, data);
    }

    @Get(':user')
    listarHistorico(@Param('user') user: string): HistoricoConsumoDto[] {
      const registros = this.service.historicoConsumo(user);
      return registros.map(({ qtd, dataLeitura }) => ({ qtd, dataLeitura }));
    }

    @Get(':user/alerta')
    verificarAlerta(@Param('user') user: string): AlertaConsumoDto | { mensagem: string } {
      const alertaMsg = this.service.verificarAlerta(user);
      if (alertaMsg) {
        const historico = this.service.historicoConsumo(user);
        const dataUltimaLeitura = historico[historico.length - 1].dataLeitura;
        return {
          user,
          alerta: alertaMsg,
          data: dataUltimaLeitura,
        };
      }
      return { mensagem: 'Sem alertas.' };
    }
    
}