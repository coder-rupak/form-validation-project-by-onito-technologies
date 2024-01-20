import { Typography } from "@mui/material";

type Props = {
  message: string | undefined;
};
export const ResponseMessage = ({ message }: Props) => {
  const firstFormMarkup = (
    <Typography color="red" sx={{ pt: 1 }}>
      {message}
    </Typography>
  );
  return <>{firstFormMarkup}</>;
};
