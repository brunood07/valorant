import { Header } from "./Header";
import { HeaderProps } from "./Header.types";

export const _Header = (props: HeaderProps) => <Header {...props} />;

_Header.props = {};

export default {
  title: "Components/Header",
  component: Header,
};
