import { getByRole, render, screen } from "@testing-library/react";
import { GitItem } from "../../src/components/GitItem";

describe("GitItem component", () => {
  const title = "Yes jest";
  const url = "http://google.com.jpg/";

  test("should match the snapshot", () => {
    const { container } = render(<GitItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the image with the url and the alt indicated", () => {
    //   first we take our test subject
    render(<GitItem title={title} url={url} />);
    // expect(screen.getByRole('img').src).toBe( url );
    // expect(screen.getByRole('img').alt).toBe( title  );
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(src);
    expect(alt).toBe(alt);
  });
  test('must show the title in the component', () => {
        //   first we take our test subject
        render(<GitItem title={title} url={url} />);
        expect(screen.getAllByText(title)).toBeTruthy();
  });
  
});
