import { TestBed } from "@angular/core/testing";
import { TestingService } from "./testing.service";

fdescribe("TestingService", () => {
  let service: TestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
