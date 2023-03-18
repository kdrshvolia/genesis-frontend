import React from "react";
import { Course } from "@/common/types";
import { getCoursesList } from "@/api/requests";
import { CoursesList } from "@/components/CoursesList";

interface PageProps {
  coursesList: Course[];
}

const Page = ({ coursesList }: PageProps) => <CoursesList courses={coursesList} />;

export const getServerSideProps = async () => {
  const coursesList = await getCoursesList();

  return {
    props: {
      coursesList,
    },
  };
};
export default Page;
