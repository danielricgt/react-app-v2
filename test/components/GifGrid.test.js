import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/ useFetchGif";

jest.mock("../../src/hooks/ useFetchGif");

// 👇 This is the mok of tue file that use import.meta.env (and crashJest)
jest.mock("../../src/config/apiKey", () => ({
  __esModule: true,
  default: "mocked_api_key",
}));

describe("test on GifGrid", () => {
  const category = "Dragon Ball";

  test("must show the loading initially", () => {
    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando"));
    expect(screen.getByText(category));
  });

  test("must show imgaes when the fetch api works", () => {
    const gifs = [
      {
        id: "abc",
        title: "Dragon Ball",
        url: "https://google.com",
      },
    //   {
    //     id: "efg",
    //     title: "Pokeom",
    //     url: "https://google.com",
    //   },
    ];
    useFetchGif.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(1);
  });
});
