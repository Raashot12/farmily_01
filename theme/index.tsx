import { APPCOLORS } from "../components/sharedComponent/Color";

export const defaultFonts =
  "NexaLight, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"

export const inputStyles = {
  input: {
    height: "3.6rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    borderRadius: 8,
    border: `1px solid ${APPCOLORS.gray}`,
  },
  label: {
    fontSize: 14,
  },
}

export const buttonStyles = {
  root: {
    height: '3rem',
    background: APPCOLORS.primary
  },
  label: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
};

export const checkboxStyles = {
  label: {
    display: 'block',
  },
};
