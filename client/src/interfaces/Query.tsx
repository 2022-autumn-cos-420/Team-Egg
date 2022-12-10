export default interface Query {
    field: string;
    compare: "contains" | "startsWith" | "equals" | "<" | "<=" | ">" | ">=" | "==";
    search: string;
  }