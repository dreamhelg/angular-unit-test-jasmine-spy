import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FirstDependencyService {
  constructor() { }

  returnValue(index: number): string {
    const values = ["one", "two", "three"];
    return values[index];
  }
}
