export interface HeaderProps {
  langage?: "pt-BR" | "en-EN" | "es-ES";
  onChangeLangage: (lang: string) => void;
}
