import { Course, CourseItem } from "../common/types";

const BASE_URL = "http://api.wisey.app/api/v1/";

interface CoursesListResponse {
  courses: Course[];
}

export const getCoursesList = async (): Promise<Course[]> => {
  try {
    const response = await fetch(`${BASE_URL}core/preview-courses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjA0YTIzOS0wMWY3LTQ1ZjgtYTk0MS02M2NiMmQxNzNmMjciLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5NzMwNjAsImV4cCI6MTY3OTg3MzA2MH0.e53WfTS6UG4wr77jV_H0jp29jm5VVLIdG3YOdfmGaLg`,
      },
    });
    if (!response.ok) {
      return [];
    }
    const responseData: CoursesListResponse = await response.json();
    return responseData.courses;
  } catch (e) {
    throw new Error("An error occurred when trying to get courses list");
  }
};

export const getCourseById = async (id: string): Promise<CourseItem> => {
  try {
    const response = await fetch(`${BASE_URL}core/preview-courses/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjA0YTIzOS0wMWY3LTQ1ZjgtYTk0MS02M2NiMmQxNzNmMjciLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5NzMwNjAsImV4cCI6MTY3OTg3MzA2MH0.e53WfTS6UG4wr77jV_H0jp29jm5VVLIdG3YOdfmGaLg`,
      },
    });
    if (!response.ok) {
      return {} as CourseItem;
    }
    return await response.json();
  } catch (e) {
    throw new Error("An error occurred when trying to course info");
  }
};
