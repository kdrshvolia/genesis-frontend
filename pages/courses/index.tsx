import React from "react";
import { Course } from "../../common/types";
import { getCoursesList } from "../../api/requests";
import { CoursesList } from "../../components/CoursesList";
import { GetServerSideProps } from "next";

interface PageProps {
  coursesList: Course[];
}

const Page = ({ coursesList }: PageProps) => (
  <CoursesList courses={coursesList} />
);

export const getServerSideProps: GetServerSideProps = async () => {
  const coursesList = await getCoursesList();

  return {
    props: {
      coursesList,
    },
  };
};
export default Page;
