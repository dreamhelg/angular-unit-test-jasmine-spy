import { Injectable } from "@angular/core";
import { FirstDependencyService } from "../first-dependency/first-dependency.service";

@Injectable({
  providedIn: "root"
})
export class TestingService {
  private firstDependencyService: FirstDependencyService;

  constructor(firstDependencyService: FirstDependencyService) {
    this.firstDependencyService = firstDependencyService;
    this.firstDependencyService.initValue();
    this.firstDependencyService.initValue2("");
  }

  getValue(index: number): string {
    return this.firstDependencyService.returnValue(index);
  }

  getIndex(): number {
    return 2;
  }

  sayHi(message: string): void {
    this.firstDependencyService.initValue2(message);
  }
}
