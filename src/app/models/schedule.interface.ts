import { EveningEvent } from './evening-event.interface';

export interface Schedule {
  version: number;
  events: EveningEvent[];
}
