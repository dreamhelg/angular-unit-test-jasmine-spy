import { Injectable } from "@angular/core";
import { FirstDependencyService } from "../first-dependency/first-dependency.service";

@Injectable({
  providedIn: "root"
})
export class TestingService {
  constructor(
    private readonly firstDependencyService: FirstDependencyService
  ) {}

  getFirstValue(index: number): string {
    return this.firstDependencyService.returnValue(index);
  }
}
