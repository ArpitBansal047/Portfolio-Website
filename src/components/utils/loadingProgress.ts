export function startLoadingProgress(setLoading: (value: number) => void) {
  let percent = 0;
  let interval: ReturnType<typeof setInterval>;

  interval = setInterval(() => {
    if (percent < 85) {
      percent += Math.round(Math.random() * 6) + 3;
      percent = Math.min(percent, 85);
      setLoading(percent);
    } else {
      clearInterval(interval);
    }
  }, 100);

  const finish = setTimeout(() => {
    clearInterval(interval);
    let finishInterval: ReturnType<typeof setInterval>;
    finishInterval = setInterval(() => {
      if (percent < 100) {
        percent = Math.min(percent + 3, 100);
        setLoading(percent);
      } else {
        clearInterval(finishInterval);
      }
    }, 20);
  }, 1800);

  return () => {
    clearInterval(interval);
    clearTimeout(finish);
  };
}
