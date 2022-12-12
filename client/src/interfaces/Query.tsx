export default interface Query {
    field: string;
    compare:  "<" | "<=" | ">" | ">=" | "==" | "in";
    search: string | string[] | number;
  }