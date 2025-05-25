import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/ useFetchGif";

// 👇 This is the mok of tue file that use import.meta.env (and crashJest)
jest.mock("../../src/config/apiKey", () => ({
  __esModule: true,
  default: "mocked_api_key",
}));

jest.mock("../../src/helpers/getgifs", () => ({
    __esModule: true,
    getGifs: jest.fn().mockResolvedValue([
      { id: "1", title: "Goku", url: "https://localhost/goku.jpg" },
      { id: "2", title: "Vegeta", url: "https://localhost/vegeta.jpg" }
    ]),
  }));

describe("useFecth API hook test", () => {

  test("should initialite the hook first state", () => {
    const { result } = renderHook(() => useFetchGif("Dragon Ball"));
    // console.log(result);
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("must return an images array and loading in false", async () => {
    const { result } = renderHook(() => useFetchGif("Dragon Ball"));
    await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
