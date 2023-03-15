import {Course} from "@/pages/common/types";

const BASE_URL = "http://api.wisey.app/api/v1/";

interface GetTokenResponse {
  token: string;
}

interface CoursesListResponse {
  courses: Course[];
}

export const getToken = async (): Promise<string> => {
  try {
    const response = await fetch(
      `${BASE_URL}auth/anonymous?platform=subscriptions`,
      {
        method: "GET",
      }
    );
    const responseData: GetTokenResponse = await response.json();
    return responseData.token;
  } catch (e) {
    throw new Error("An error occurred when trying to get token")
  }
};

export const getCoursesList = async (token: string): Promise<Course[]> => {
  try {
    const response = await fetch(`${BASE_URL}core/preview-courses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData: CoursesListResponse = await response.json();
    return responseData.courses;
  } catch (e) {
    throw new Error("An error occurred when trying to get courses list")
  }
};
