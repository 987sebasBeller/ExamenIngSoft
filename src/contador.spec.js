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
    it("Obtener lista de palabras separadas por ;", () => {
        let contador= new Contador("a;b;c")
      expect(contador.obtenerLista()).toEqual(["a","b","c"]);
    });
    it("Obtener lista de palabras separadas por .", () => {
        let contador= new Contador("a.b.c")
      expect(contador.obtenerLista()).toEqual(["a","b","c"]);
    });
    it("Obtener conteo de palabras separadas por .", () => {
        let contador= new Contador("a.b.c.c")
      expect(contador.obtenerRepeticiones()).toEqual({"a": 1, "b": 1, "c": 2});
    });
    it("Obtener conteo de palabras separadas por criterios", () => {
        let contador= new Contador("El password de mi cuenta es PASSWORD.Es un password de poco cuidado")
      expect(contador.obtenerRepeticiones()).toEqual({"el": 1, "password": 3, "de": 2,"mi":1, "cuenta":1,"es":2,"un":1,"poco":1,"cuidado":1});
    });
  });