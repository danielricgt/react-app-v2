import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

// 👇 Este es el mock del archivo que usa import.meta.env (y rompe en Jest)
jest.mock("../../src/config/apiKey", () => ({
  __esModule: true,
  default: "mocked_api_key",
}));

describe("test on GifGrid", () => {
  const category = "Dragon Ball";

  test("must show the loading initially", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando"));
    expect(screen.getByText(category));
  });

  test("must show imgaes when the fetch api works", () => {
    
  });
});
