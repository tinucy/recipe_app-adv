import React from "react";
import "./Main.scss";
import Search from "../Search/Search";
import Searchhero from "../SearchHero/Searchhero";
import Recipesection from "../Recipesection/Recipesection";

export default function Main() {
  return (
    <main>
      <Search />
      <Searchhero />
      <Recipesection />
    </main>
  );
}
