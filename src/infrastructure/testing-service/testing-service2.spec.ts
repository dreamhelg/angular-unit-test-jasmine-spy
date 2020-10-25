import { TestingService } from "./testing.service";
import { TestBed } from "@angular/core/testing";
import { FirstDependencyService } from "../first-dependency/first-dependency.service";

describe("TestingService Version 2 ", () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;

  const fakeFirstDependencyService = {
    returnValue: jasmine.createSpy("returnValue"),
    initValue: jasmine.createSpy("initValue"),
    initValue2: jasmine.createSpy("initValue2")
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService,
        { provide: FirstDependencyService, useValue: fakeFirstDependencyService }
      ]
    });
    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
    fakeFirstDependencyService.returnValue.and.returnValue("two");
  });

  it("должен возвращать значение массива по указанному индексу", () => {
    const result = service.getValue(1);
    expect(result).toBe("two");
  });

  it("должен возвращать значение массива по указанному индексу 0", () => {
    fakeFirstDependencyService.returnValue.and.returnValue("one");
    const result = service.getValue(0);
    expect(result).toBe("one");
  });
});
