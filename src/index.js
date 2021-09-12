import "./styles/index.scss";

const elvenShieldRecipe = {
    leatherStrips:2,
    ironIngot:1,
    refinedMoonstone: 8,
}

const elvenGauntLetsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4
}

console.log(elvenShieldRecipe)
console.log(elvenGauntLetsRecipe)