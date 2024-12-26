export const onProfilerRender: React.ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  console.log(`%c${id}`, 'color: purple', `${phase.toUpperCase()}`, `actualDuration: ${actualDuration} ms`, `baseDuration: ${baseDuration} ms`);
  // `startTime: ${startTime} ms`,
  // `commitTime: ${commitTime} ms`
};
