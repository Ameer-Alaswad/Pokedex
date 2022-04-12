import { renderHook } from "@testing-library/react-hooks";
import { useQuery } from "react-query";

import { useHandleErrors } from "./useHandleErrors";

jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

describe("useHandleErrors", () => {
  it.only("returns error message", async () => {
    useQuery.mockReturnValue({
      isError: true,
      pokemonSpecies_error: { message: "Error message" },
    });

    const { result } = await renderHook(() => useHandleErrors());
    const message =
      useQuery.mock.results[0]?.value.pokemonSpecies_error.message;

    expect(result.current.type).toEqual("div");
    expect(message).toEqual("Error message");
  });

  it("not return error", () => {
    useQuery.mockReturnValue({
      pokemonSpecies_isError: false,
    });
    const { result } = renderHook(() => useHandleErrors());

    expect(result.current).toEqual({
      error: undefined,
    });
  });
});
