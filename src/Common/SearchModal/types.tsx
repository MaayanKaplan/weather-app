export interface ModalProps {
  data: [{ Country: { LocalizedName: string }; LocalizedName: string }];
  item: {};
  getAutoComplete: () => Awaited<Promise<string>>;

  children: JSX.Element;
  value: string;
}
