import { Injectable } from '@angular/core';

@Injectable()

export class Favourite {
  favouriteList: Array<{ id: number; name: string }> = [];
}
