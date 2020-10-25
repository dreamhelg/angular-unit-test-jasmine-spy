import { TestingService } from "./testing.service";
import { TestBed } from "@angular/core/testing";
import { FirstDependencyService } from "../first-dependency/first-dependency.service";

describe("TestingService ", () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;
  let firstDependencyReturnValueSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService]
    });

    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
    // возвращаемое значение по умолчанию
    firstDependencyReturnValueSpy = spyOn(firstDependency, "returnValue").and.returnValue("two");
  });

  it("should create", () => {
    expect(service).toBeDefined();
  });

  it("должен возвращать значение массива по указанному индексу - оригинальный метод класса", () => {
    const result = service.getValue(1);
    expect(result).toBe("two");
  });

  it("должен возвращать значение массива по указанному индексу - spyOn and callThrough", () => {
    firstDependencyReturnValueSpy.and.callThrough();
    const result = service.getValue(1);
    expect(result).toBe("two");
  });

  it("должен возвращать значение массива по указанному индексу - spyOn and callFake", () => {
    firstDependencyReturnValueSpy.and.callFake(() => "three");
    const result = service.getValue(1);
    expect(result).toBe("three");
  });

  it("должен возвращать значение массива по указанному индексу - spyOn and returnValue", () => {
    const result = service.getValue(1);
    expect(result).toBe("two");
  });

  it("должен возвращать значение массива, возвращаемого функцией getIndex", () => {
    firstDependencyReturnValueSpy.and.returnValue("one");

    // устанавливаем шпиона в существующий метод сервиса getIndex
    spyOn(service, "getIndex").and.returnValue(0);
    const result = service.getValue(service.getIndex());
    expect(result).toBe("one");
  });
});
