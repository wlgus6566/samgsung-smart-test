export function isMobileUserAgent(userAgent) {
  const mobileRegex =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
}
