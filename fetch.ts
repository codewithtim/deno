const url = "https://rickandmortyapi.com/api/character";
const id = Deno.args[0];
const res = await fetch(`${url}/${id}`);
const json = await res.json();
console.log(json);