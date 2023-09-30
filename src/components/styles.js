export let styles = {
  transform: dark ? "translateX(100%)" : "",
};

export let mainstyles = {
  background: dark ? "#102334" : "#A0D7FF",
  color: dark ? "#F7F8FB" : "#005DB2",
};

export let pro = {
  background: dark
    ? "#17181A"
    : "linear-gradient(to left top, white , #bddfff)",
  color: dark ? "#F7F8FB" : "#005DB2",
};

export let keystyles = {
  backgroundColor: dark ? "#303136" : "#6eabff0f",
  boxShadow: `inset 0 4px 8px ${dark ? "rgba(240, 248, 255, 0.6)" : "#5eb2f7"}`,
};
