export const checkdevice = () => {
  const isMobileFromWindow =
    navigator.userAgent.match(
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobi|webOS|BlackBerry/i
    ) || window.innerWidth < 768;

  return isMobileFromWindow;
};
