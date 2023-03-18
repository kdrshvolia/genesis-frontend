export const getCourseImageLink = (link: string) => `${link}/cover.webp`;

export const getLessonDuration = (durationS: number) => {
  const minutes = Math.floor(durationS / 60);
  const seconds = durationS % 60;
  return `${minutes}m ${seconds}s`
};

