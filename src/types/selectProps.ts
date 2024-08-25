export interface CountrySelectProps {
  name: string; // Correctly type the prop
}
export interface OptionType {
  label: string;
  value: string;
}

export interface CustomSelectProps {
  name: string;
  label: string;
  options: OptionType[];
  placeholder: string;
}
