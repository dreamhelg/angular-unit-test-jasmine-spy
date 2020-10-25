import { TestingService } from "./testing.service";
import { TestBed } from "@angular/core/testing";
import { FirstDependencyService } from "../first-dependency/first-dependency.service";

describe("TestingService Version 3 ", () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;

  const fakeFirstDependencyService = jasmine.createSpyObj(["initValue", "returnValue", "initValue2"]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService,
        { provide: FirstDependencyService, useValue: fakeFirstDependencyService }
      ]
    });
    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
    fakeFirstDependencyService.returnValue.and.returnValue("two");

    // выполняем сброс вызовов для корректной проверки их количества внутри теста
    fakeFirstDependencyService.initValue2.calls.reset();
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

  it("метод sayHi() должен вызывать методо зависимости initValue2", () => {
    service.sayHi("some text");
    expect(fakeFirstDependencyService.initValue2).toHaveBeenCalled();
    expect(fakeFirstDependencyService.initValue2).toHaveBeenCalledTimes(1);
    expect(fakeFirstDependencyService.initValue2).toHaveBeenCalledWith("some text");
  });
});
