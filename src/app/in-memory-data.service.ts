import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Event } from './event';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      { id: 11, name: 'Easter' },
      { id: 12, name: 'Memorial Day' },
      { id: 13, name: 'Independence Day' },
      { id: 14, name: 'Labor Day' },
      { id: 15, name: 'Halloween' },
      { id: 16, name: 'Veterans Day' },
      { id: 17, name: 'Thanksgiving' },
      { id: 18, name: 'Christmas' }
    ];
    return {events};
  }
  genId(events: Event[]): number {
    return events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 11;
  }
}
