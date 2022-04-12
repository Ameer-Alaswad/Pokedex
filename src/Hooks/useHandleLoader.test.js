import { renderHook } from "@testing-library/react-hooks";
import { useQuery } from "react-query";
import { useHandleLoader } from "./useHandleLoader";

jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

describe("useHandleLoader", () => {
  it.only("returns loading message", async () => {
    useQuery.mockReturnValue({
      isLoading: true,
      loading: { message: "Loading..." },
    });
    const { result } = await renderHook(() => useHandleLoader());
    const message = useQuery.mock.results[0].value.loading.message;
    expect(result.current.loading.type).toEqual("div");
    expect(message).toEqual("Loading...");
  });
  it("not return error", () => {
    useQuery.mockReturnValue({
      isLoading: false,
    });
    const { result } = renderHook(() => useHandleLoader());

    expect(result.current).toEqual({
      error: undefined,
    });
  });
});
