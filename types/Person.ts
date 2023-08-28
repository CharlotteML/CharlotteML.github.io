export default interface Person {
  name: {
    first: string | null;
    middle: string | null;
    last: string | null;
  };
  position: string[];
  research: string[];
  introduction: string;
  teaching:
    | { course: string; title: string; term: string }[]
    | null
    | undefined;
  contact: {
    email: string[] | null | undefined;
    phone: string[] | null | undefined;
    address: string | null | undefined;
    website: string | null | undefined;
  };
  photo: string | null | undefined;
}
