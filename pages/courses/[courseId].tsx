import React from "react";
import { CourseItem } from "@/common/types";
import { getCourseById } from "@/api/requests";
import { GetServerSideProps } from "next";
import { Course } from "@/components/Course";

interface PageProps {
  course: CourseItem;
}

const Page = ({ course }: PageProps) => <Course course={course} />;

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  query,
}) => {
  const courseId = query.courseId as string;

  if (!courseId) {
    return {
      notFound: true,
    };
  }

  const course = await getCourseById(courseId);

  return {
    props: {
      course,
    },
  };
};
export default Page;
