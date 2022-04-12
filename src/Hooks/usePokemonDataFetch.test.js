import { renderHook } from "@testing-library/react-hooks";
import { useQuery } from "react-query";

import usePokemonDataFetch from "./usePokemonDataFetch";

jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

describe("usePokemonDataFetch", () => {
  it("returns data", () => {
    useQuery.mockReturnValue({
      data: {
        name: "bulbasaur",
        id: 1,
      },
    });
    const { result } = renderHook(() => usePokemonDataFetch());
    expect(result.current).toMatchObject({
      data: {
        name: "bulbasaur",
        id: 1,
      },
    });
  });
  it("not return data", () => {
    useQuery.mockReturnValue({
      data: {
        name: "bulbasaur",
        id: 1,
      },
    });
    const { result } = renderHook(() => usePokemonDataFetch());
    expect(result.current).toMatchObject({
      data: { id: 1, name: "bulbasaur" },
    });
  });
});
