export type SeverityOptions = "success" | "error";

export type NotificationProps = {
  severity: SeverityOptions;
  children?: React.ReactNode;
  className?: string;
};
