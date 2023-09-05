import Contador from "./contador";
describe("Contador", () => {
    it("Obtener lista de palabras separadas por espacio", () => {
        let contador= new Contador("a b c")
      expect(contador.obtenerLista()).toEqual(["a","b","c"]);
    });
    it("Obtener lista de palabras separadas por guiones", () => {
        let contador= new Contador("a-b-c")
      expect(contador.obtenerLista()).toEqual(["a","b","c"]);
    });
    it("Obtener lista de palabras separadas por ,", () => {
        let contador= new Contador("a,b,c")
      expect(contador.obtenerLista()).toEqual(["a","b","c"]);
    });
  });