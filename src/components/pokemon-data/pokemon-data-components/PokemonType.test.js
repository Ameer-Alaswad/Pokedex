import { render, screen } from "@testing-library/react";
import { configure } from "@testing-library/dom";
import PokemonTypes from "./PokemonType";
import * as React from "react";
describe("pokemonType", () => {
  configure({
    testIdAttribute: "data-test-id",
  });
  it("returns the correct (types) or (type) string", () => {
    const pokemonTypesArray1 = [
      {
        types: [{ slot: 1, type: { name: "grass" } }],
      },
    ];
    const { rerender } = render(<PokemonTypes data={pokemonTypesArray1} />);
    expect(screen.getByTestId("typesOrType")).toHaveTextContent("Type");
    const pokemonTypesArray2 = [
      {
        types: [
          { slot: 1, type: { name: "grass" } },
          { slot: 2, type: { name: "poison" } },
          { slot: 3, type: { name: "water" } },
        ],
      },
    ];
    rerender(<PokemonTypes data={pokemonTypesArray2} />);
    expect(screen.getByTestId("typesOrType")).toHaveTextContent("Types");
  });
});
